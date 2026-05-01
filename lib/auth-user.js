import { auth, currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export async function requireClerkAuth() {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  return { userId };
}

export async function getOrCreateDbUser() {
  const { userId } = await requireClerkAuth();
  const clerkUser = await currentUser();

  if (!clerkUser) {
    throw new Error("Unauthorized");
  }

  const email = clerkUser.emailAddresses?.[0]?.emailAddress;
  if (!email) {
    throw new Error("Missing user email in Clerk profile");
  }

  const fullName = [clerkUser.firstName, clerkUser.lastName]
    .filter(Boolean)
    .join(" ")
    .trim();

  return db.user.upsert({
    where: { clerkUserId: userId },
    update: {
      email,
      name: fullName || null,
      imageUrl: clerkUser.imageUrl || null,
    },
    create: {
      clerkUserId: userId,
      email,
      name: fullName || null,
      imageUrl: clerkUser.imageUrl || null,
    },
  });
}
