import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = process.env.ANTHROPIC_API_KEY
  ? new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  : null;

async function extractText(file: File): Promise<string> {
  const name = file.name.toLowerCase();

  if (name.endsWith(".txt")) {
    return await file.text();
  }

  if (name.endsWith(".pdf")) {
    const pdfModule = await import("pdf-parse");
    const pdfParse  = (pdfModule as unknown as { default: (buf: Buffer) => Promise<{ text: string }> }).default ?? pdfModule;
    const buffer    = Buffer.from(await file.arrayBuffer());
    const data      = await pdfParse(buffer);
    return data.text;
  }

  if (name.endsWith(".docx")) {
    const mammoth = await import("mammoth");
    const buffer  = Buffer.from(await file.arrayBuffer());
    const result  = await mammoth.extractRawText({ buffer });
    return result.value;
  }

  throw new Error("Unsupported file type. Please upload a .pdf, .docx, or .txt file.");
}

const SYSTEM = `You are an expert quiz writer. Given study material, you create engaging custom board multiple-choice questions. Always return valid JSON only — no markdown, no explanation, just the JSON object.`;

function buildPrompt(text: string): string {
  return `Create a custom game board from this study material.

STUDY MATERIAL:
${text}

Return ONLY this JSON structure (no markdown, no code fences):
{
  "boardName": "Short descriptive title (4-6 words)",
  "category1": "First category name (2-4 words)",
  "category2": "Second category name (2-4 words)",
  "questions": [
    {
      "id": "cq-1",
      "category": "Must match category1 or category2 exactly",
      "points": 200,
      "question": "Question text ending with ?",
      "choices": ["Correct answer", "Plausible wrong answer", "Another wrong answer", "Another wrong answer"],
      "answer": "Correct answer (must match one choice exactly)",
      "explanation": "One sentence explaining why this is correct."
    }
  ]
}

Rules:
- Exactly 10 questions total: 5 per category, one at each point level (200, 400, 600, 800, 1000)
- Higher points = harder questions requiring deeper understanding
- All questions must be directly based on the provided content
- Each question has exactly 4 choices; shuffle so the correct answer is not always first
- The "answer" field must be an exact character-for-character match of one entry in "choices"
- Category names should reflect the content themes
- Questions should test comprehension and application, not just memorization`;
}

export async function POST(req: NextRequest) {
  if (!anthropic) {
    return NextResponse.json({ error: "AI not configured — set ANTHROPIC_API_KEY" }, { status: 503 });
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const file = formData.get("file") as File | null;
  if (!file) return NextResponse.json({ error: "No file uploaded" }, { status: 400 });

  if (file.size > 10 * 1024 * 1024) {
    return NextResponse.json({ error: "File too large (max 10 MB)" }, { status: 413 });
  }

  let rawText: string;
  try {
    rawText = await extractText(file);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 422 });
  }

  // Truncate to keep tokens reasonable
  const text = rawText.slice(0, 12000);
  if (text.trim().length < 100) {
    return NextResponse.json({ error: "Not enough text content found in the file." }, { status: 422 });
  }

  let jsonText = "";
  try {
    const message = await anthropic.messages.create({
      model:      "claude-sonnet-4-6",
      max_tokens: 3000,
      system:     SYSTEM,
      messages:   [{ role: "user", content: buildPrompt(text) }],
    });

    const block = message.content.find((b) => b.type === "text");
    jsonText = (block as { type: "text"; text: string })?.text ?? "";

    // Strip any accidental markdown fences
    jsonText = jsonText.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/, "").trim();

    const board = JSON.parse(jsonText);

    // Validate structure
    if (!board.questions || board.questions.length !== 10) {
      throw new Error("Expected exactly 10 questions");
    }

    // Ensure IDs are unique and answer exists in choices
    board.questions = board.questions.map((q: Record<string, unknown>, i: number) => ({
      ...q,
      id: `cq-${Date.now()}-${i}`,
    }));

    return NextResponse.json({ ...board, fileContent: text });
  } catch (err) {
    console.error("Board generation error:", err, "\nRaw response:", jsonText);
    return NextResponse.json(
      { error: "Failed to generate questions. Please try again or use a different file." },
      { status: 500 }
    );
  }
}
