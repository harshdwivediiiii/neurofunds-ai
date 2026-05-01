import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis;
const databaseUrl = process.env.DATABASE_URL || "";
const directUrl = process.env.DIRECT_URL || "";

function assertNeonConfig() {
  if (!databaseUrl.includes(".neon.tech")) {
    throw new Error(
      "DATABASE_URL must point to Neon PostgreSQL (.neon.tech)."
    );
  }
  if (directUrl && !directUrl.includes(".neon.tech")) {
    throw new Error("DIRECT_URL must point to Neon PostgreSQL (.neon.tech).");
  }
  if (directUrl && directUrl.includes("-pooler.")) {
    console.warn(
      "DIRECT_URL is using a pooled Neon endpoint. Use the direct Neon host for Prisma schema operations."
    );
  }
}

assertNeonConfig();

export const prisma =
  globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export const db = prisma;
