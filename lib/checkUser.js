import { getOrCreateDbUser } from "@/lib/auth-user";

export const checkUser = async () => {
  try {
    return await getOrCreateDbUser();
  } catch (error) {
    console.error("checkUser failed:", error.message);
    return null;
  }
};
