import { useState } from 'react'
import './App.css'
import { TextInputForm } from './components/TextInputForm'
import { AnalysisResult } from './components/AnalysisResult'
import { useMisinformationAnalysis } from './hooks/useMisinformationAnalysis'

function App() {
  const { result, loading, error, analyzeText } = useMisinformationAnalysis();

  return (
    <div className="max-w-7xl mx-auto p-8 min-h-screen flex flex-col">
      <header className="text-center mb-8 pb-6 border-b border-gray-200">
        <h1 className="text-4xl text-primary mb-2 font-bold">Misinformation Detector</h1>
        <p className="text-lg text-neutral">Analyze news articles and statements for credibility using AI</p>
      </header>

      <main className="flex-1 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <TextInputForm onSubmit={analyzeText} isLoading={loading} />
        </div>

        {(loading || result || error) && (
          <div className="flex-1">
            {loading ? (
              <div className="flex justify-center items-center min-h-[200px] bg-white rounded-lg shadow">
                <p className="text-neutral">Analyzing text for misinformation...</p>
              </div>
            ) : (
              <AnalysisResult result={result} error={error} />
            )}
          </div>
        )}
      </main>

      <footer className="mt-8 pt-6 border-t border-gray-200 text-center text-neutral text-sm">
        <p>
          Misinformation Detector uses the Gemini API to analyze text credibility.
          This tool is for educational purposes only.
        </p>
      </footer>
    </div>
  )
}

export default App
