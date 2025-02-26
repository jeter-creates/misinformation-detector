import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the API with the key from environment variables
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// Define the model to use
const modelName = 'gemini-pro';

export interface MisinformationAnalysisResult {
  credibilityScore: number; // 0-1 scale
  assessment: 'true' | 'false' | 'uncertain';
  explanation: string;
}

export const analyzeMisinformation = async (text: string): Promise<MisinformationAnalysisResult> => {
  try {
    // Make sure API key is available
    if (!apiKey) {
      throw new Error('Gemini API key is not configured. Please add it to your .env file.');
    }

    const model = genAI.getGenerativeModel({ model: modelName });

    // Create a prompt that asks the model to analyze the credibility
    const prompt = `
      Analyze the following text for misinformation. 
      Determine if the content is likely true, false, or if there's not enough information to make a determination.
      Provide a credibility score from 0 to 1 (0 being completely false, 1 being completely credible).
      Explain your reasoning with specific details.
      
      Text to analyze: "${text}"
      
      Format your response as JSON with the following structure:
      {
        "credibilityScore": number between 0 and 1,
        "assessment": "true" or "false" or "uncertain",
        "explanation": "detailed explanation of the assessment"
      }
    `;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const textResponse = response.text();
    
    // Extract the JSON from the response
    const jsonMatch = textResponse.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Failed to parse response from Gemini API');
    }
    
    const parsedResponse = JSON.parse(jsonMatch[0]) as MisinformationAnalysisResult;
    return parsedResponse;
  } catch (error) {
    console.error('Error analyzing text with Gemini:', error);
    throw error;
  }
};

