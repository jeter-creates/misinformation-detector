import { useState } from 'react';
import { analyzeMisinformation, MisinformationAnalysisResult } from '../services/geminiService';

interface UseMisinformationAnalysisReturn {
  result: MisinformationAnalysisResult | null;
  loading: boolean;
  error: string | null;
  analyzeText: (text: string) => Promise<void>;
  resetAnalysis: () => void;
}

export const useMisinformationAnalysis = (): UseMisinformationAnalysisReturn => {
  const [result, setResult] = useState<MisinformationAnalysisResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const analyzeText = async (text: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // Don't analyze empty text
      if (!text.trim()) {
        setError('Please enter some text to analyze');
        setLoading(false);
        return;
      }
      
      const analysisResult = await analyzeMisinformation(text);
      setResult(analysisResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const resetAnalysis = () => {
    setResult(null);
    setError(null);
  };

  return {
    result,
    loading,
    error,
    analyzeText,
    resetAnalysis
  };
}; 