import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

export function getGeminiModel(model = "gemini-1.5-flash") {
  if (!apiKey) {
    return null;
  }
  const genAI = new GoogleGenerativeAI(apiKey);
  return genAI.getGenerativeModel({ model });
}

export async function safeGenerateText(prompt, model = "gemini-1.5-flash") {
  const aiModel = getGeminiModel(model);
  if (!aiModel) return null;
  const result = await aiModel.generateContent(prompt);
  const response = await result.response;
  return response.text();
}
