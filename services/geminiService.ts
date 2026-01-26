
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "Big Bull Fitness AI Assistant". Your tone is high-energy, motivating, professional, and friendly. 
You are an expert in fitness, nutrition, and strength training.
Provide concise, helpful advice. Mention that the user can find more details at our gym in Mumbai Central.
Limit responses to 150 words.
`;

export async function getFitnessAdvice(userMessage: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });
    return response.text || "I'm having a bit of trouble connecting right now. Why not come down to Big Bull Fitness for some real-world motivation?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong. Let's focus on those gains! Drop by the gym for a talk.";
  }
}
