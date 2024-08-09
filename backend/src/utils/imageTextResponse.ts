import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY as string);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Converts uploaded image buffer to a GoogleGenerativeAI.Part object
function bufferToGenerativePart(buffer: Buffer, mimeType: string) {
  return {
    inlineData: {
      data: buffer.toString("base64"),
      mimeType
    },
  };
}

export const getImageTextResponse = async (userInput: string, buffer: Buffer, mimeType: string): Promise<string> => {
  try {
    // Convert the image buffer to the required format
    const imagePart = bufferToGenerativePart(buffer, mimeType);

    // Generate response from both text and image
    const result = await model.generateContent([userInput, imagePart]);
    const response = await result.response;
    const text = await response.text();
    
    return text;
  } catch (error) {
    console.error('Error interacting with Google Gemini API:', error);
    throw error;
  }
};
