import { MisinformationAnalysisResult } from '../services/geminiService';

interface AnalysisResultProps {
  result: MisinformationAnalysisResult | null;
  error: string | null;
}

export const AnalysisResult = ({ result, error }: AnalysisResultProps) => {
  if (error) {
    return (
      <div className="bg-white p-6 rounded-lg shadow border-l-4 border-danger">
        <h2 className="text-2xl text-danger mb-6 font-semibold">Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (!result) {
    return null;
  }

  // Determine the result class based on the assessment
  const getResultClass = () => {
    switch (result.assessment) {
      case 'true':
        return 'credible';
      case 'false':
        return 'misinformation';
      case 'uncertain':
        return 'uncertain';
      default:
        return '';
    }
  };

  // Format the credibility score as a percentage
  const scorePercentage = Math.round(result.credibilityScore * 100);

  return (
    <div className={`bg-white p-6 rounded-lg shadow ${getResultClass()}`}>
      <h2 className="text-2xl text-dark mb-6 font-semibold">Analysis Result</h2>
      
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <div className="assessment-badge">
          {result.assessment === 'true' && 'Likely Credible'}
          {result.assessment === 'false' && 'Likely Misinformation'}
          {result.assessment === 'uncertain' && 'Uncertain'}
        </div>
        
        <div className="text-base">
          <span>Credibility Score: </span>
          <strong className="text-lg">
            {scorePercentage}%
          </strong>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg mb-2 font-medium">Explanation:</h3>
        <p>{result.explanation}</p>
      </div>
      
      <div className="bg-light p-4 rounded-lg text-sm text-neutral">
        <p>
          <strong>Note:</strong> This analysis is AI-generated and should be used as a starting point for 
          your own research. Always verify information from multiple reliable sources.
        </p>
      </div>
    </div>
  );
}; 