import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { getOrCreateDbUser } from "@/lib/auth-user";

export const dynamic = "force-dynamic";

function decimalToNumber(value) {
  return Number.parseFloat(value?.toString?.() ?? "0");
}

function average(values) {
  if (!values.length) return 0;
  return values.reduce((sum, v) => sum + v, 0) / values.length;
}

export async function GET() {
  try {
    const user = await getOrCreateDbUser();

    const transactions = await db.transaction.findMany({
      where: {
        userId: user.id,
        type: "EXPENSE",
      },
      orderBy: { date: "asc" },
    });

    if (!transactions.length) {
      return NextResponse.json({
        monthlyForecast: 0,
        savingsForecast: 0,
        confidence: "low",
        basis: "No historical expense records yet",
      });
    }

    const monthlyBuckets = new Map();
    for (const tx of transactions) {
      const date = new Date(tx.date);
      const key = `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}`;
      monthlyBuckets.set(
        key,
        (monthlyBuckets.get(key) ?? 0) + decimalToNumber(tx.amount)
      );
    }

    const monthlyExpenses = [...monthlyBuckets.values()];
    const monthlyForecast = Number(average(monthlyExpenses).toFixed(2));

    const recentWindow = monthlyExpenses.slice(-3);
    const recentAverage = average(recentWindow);
    const savingsForecast = Number(
      Math.max(0, monthlyForecast - recentAverage * 0.9).toFixed(2)
    );

    return NextResponse.json({
      monthlyForecast,
      savingsForecast,
      confidence: monthlyExpenses.length >= 6 ? "medium" : "low",
      basis: "Simple moving average on historical monthly expenses",
      samples: monthlyExpenses.length,
    });
  } catch (error) {
    console.error("GET /api/predictions failed:", error);
    return NextResponse.json(
      { error: "Unable to compute predictions" },
      { status: 500 }
    );
  }
}
