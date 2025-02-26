import { useState, FormEvent } from 'react';

interface TextInputFormProps {
  onSubmit: (text: string) => void;
  isLoading: boolean;
}

export const TextInputForm = ({ onSubmit, isLoading }: TextInputFormProps) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(inputText);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl text-dark mb-2 font-semibold">Enter Text to Analyze</h2>
      <p className="mb-6 text-neutral">Paste a news article, statement, or claim to check its credibility.</p>
      
      <form onSubmit={handleSubmit}>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text to analyze for misinformation..."
          rows={10}
          disabled={isLoading}
          className="input-textarea"
        />
        
        <button 
          type="submit" 
          disabled={isLoading || !inputText.trim()}
          className="submit-button"
        >
          {isLoading ? 'Analyzing...' : 'Analyze Text'}
        </button>
      </form>
    </div>
  );
}; 