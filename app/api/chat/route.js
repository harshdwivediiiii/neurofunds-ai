import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { safeGenerateText } from "@/lib/ai";
import { getOrCreateDbUser } from "@/lib/auth-user";

export const dynamic = "force-dynamic";

function toNumber(value) {
  return Number.parseFloat(value?.toString?.() ?? "0");
}

export async function POST(req) {
  try {
    const { message } = await req.json();
    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const user = await getOrCreateDbUser();

    const [recentTransactions, budgets, goals] = await Promise.all([
      db.transaction.findMany({
        where: { userId: user.id },
        orderBy: { date: "desc" },
        take: 30,
      }),
      db.budget.findMany({ where: { userId: user.id } }),
      db.goal.findMany({
        where: { userId: user.id, status: "ACTIVE" },
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
    ]);

    const ragContext = {
      budgets: budgets.map((b) => ({ amount: toNumber(b.amount) })),
      goals: goals.map((g) => ({
        title: g.title,
        targetAmount: toNumber(g.targetAmount),
        savedAmount: toNumber(g.savedAmount),
      })),
      transactions: recentTransactions.map((t) => ({
        type: t.type,
        amount: toNumber(t.amount),
        category: t.category,
        date: t.date,
        description: t.description,
      })),
    };

    const prompt = `
You are NeuroFunds Copilot, an Indian personal finance assistant.
Provide concise, actionable guidance and mention INR where relevant.

User question: ${message}

RAG Context JSON:
${JSON.stringify(ragContext)}

Output format:
1) Key finding (1-2 lines)
2) What caused it (bullets)
3) Suggested actions (bullets)
4) One weekly habit to improve behavior
`;

    const aiResponse =
      (await safeGenerateText(prompt, "gemini-1.5-flash")) ??
      "I could not reach the AI model right now. Please try again in a moment.";

    return NextResponse.json({
      answer: aiResponse,
      contextWindow: {
        transactions: recentTransactions.length,
        goals: goals.length,
      },
    });
  } catch (error) {
    console.error("POST /api/chat failed:", error);
    return NextResponse.json(
      { error: "Failed to generate financial insight" },
      { status: 500 }
    );
  }
}
