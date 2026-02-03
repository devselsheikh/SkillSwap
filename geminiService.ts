
import { GoogleGenAI } from "@google/genai";
import { UserProfile } from './types';

// Always use a named parameter { apiKey: process.env.API_KEY } for initialization.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMatchInsight = async (user: UserProfile, match: UserProfile) => {
  try {
    const prompt = `
      You are a networking coach for a skill-sharing platform called SkillSwap. 
      Analyze the synergy between these two users:
      
      User A: ${user.name} 
      Offers: ${user.skillsOffered.join(', ')}
      Needs: ${user.skillsNeeded.join(', ')}
      
      User B: ${match.name}
      Offers: ${match.skillsOffered.join(', ')}
      Needs: ${match.skillsNeeded.join(', ')}
      
      Provide a 2-sentence insight on why they are a great match and one specific project idea they could collaborate on. 
      Keep it encouraging and professional.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    // response.text is a property, not a method. Do not use response.text().
    return response.text || "These two users have a strong overlap in skills and needs, making them excellent partners for a collaborative swap!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "These two users have a strong overlap in skills and needs, making them excellent partners for a collaborative swap!";
  }
};
