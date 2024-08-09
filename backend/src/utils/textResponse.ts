import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY as string);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const getTextResponse = async (userInput: string): Promise<string> => {
  try {
    const result = await model.generateContent(userInput);
    const response = await result.response;
    const text = await response.text();
    return text;
  } catch (error) {
    console.error('Error interacting with Google Gemini API:', error);
    throw error;
  }
};
