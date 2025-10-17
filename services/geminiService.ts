
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // This is a fallback for development. In a real scenario, the key should be set.
  console.warn("Gemini API key not found. Using a placeholder service.");
}

const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

export const generateCleaningTip = async (problem: string): Promise<string> => {
  if (!ai) {
    return Promise.resolve(
        `Untuk membersihkan "${problem}", coba gunakan kain mikrofiber yang sedikit basah. Jika noda tetap ada, pertimbangkan untuk menggunakan pembersih khusus yang sesuai dengan permukaan. (Ini adalah respons placeholder karena API Key tidak dikonfigurasi).`
    );
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Anda adalah seorang ahli kebersihan rumah mewah. Berikan panduan langkah demi langkah yang sederhana dan efektif untuk mengatasi masalah kebersihan berikut. Gunakan bahasa Indonesia yang sopan dan profesional. Masalahnya adalah: "${problem}"`,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating cleaning tip:", error);
    return "Maaf, terjadi kesalahan saat membuat tips kebersihan. Silakan coba lagi nanti.";
  }
};
