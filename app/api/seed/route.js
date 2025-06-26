import { seedTransactions } from "@/services/seed";


export async function GET() {
  const result = await seedTransactions();
  return Response.json(result);
}
