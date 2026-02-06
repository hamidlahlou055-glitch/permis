
import { GoogleGenAI } from "@google/genai";

export const getExamTips = async (userConcern: string) => {
  // Initialize inside the function for better environment resilience
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User concern about Moroccan driving exam: ${userConcern}. Give a short, encouraging 2-sentence tip in Moroccan Darija (Arabic script). Focus on rules or confidence.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    return response.text || "بالتوفيق في الامتحان ديالك! ركز على القواعد الأساسية وغادي تنجح إن شاء الله.";
  } catch (error) {
    console.error("AI Error:", error);
    return "بالتوفيق! مع هاد الدورة ديال كود أيوب غادي تنجح بكل ثقة.";
  }
};
