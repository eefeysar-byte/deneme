import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the Gemini AI client
// NOTE: In a real production app, ensure API keys are handled securely (e.g., backend proxy).
// For this demo, we assume process.env.API_KEY is available during build/runtime.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateAIResponse = async (
  prompt: string, 
  context?: string
): Promise<string> => {
  try {
    const model = "gemini-2.5-flash";
    
    // Construct a context-aware prompt
    const fullPrompt = context 
      ? `Aşağıdaki hukuk notları bağlamında soruyu cevapla:
      
      BAĞLAM:
      ${context}
      
      SORU:
      ${prompt}
      `
      : prompt;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: fullPrompt,
      config: {
        systemInstruction: "Sen 'LexNot' adında uzman, yardımsever ve akademik bir hukuk asistanısın. Hukuk öğrencilerine derslerinde yardımcı oluyorsun. Cevapların Türkçe, net, hukuki terminolojiye hakim ancak anlaşılır olmalı. Kesin hukuki tavsiye vermekten kaçın, bunun eğitim amaçlı olduğunu belirt.",
        temperature: 0.3, // Lower temperature for more factual responses
      },
    });

    return response.text || "Üzgünüm, şu anda cevap oluşturamıyorum.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Bir hata oluştu. Lütfen API anahtarınızı kontrol edin veya daha sonra tekrar deneyin.";
  }
};