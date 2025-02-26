# Misinformation Detector

A web-based application designed to assess the credibility of news articles and statements using the Gemini API.

## Overview

The Misinformation Detector helps users discern between real and fake news by analyzing user-provided text to determine its authenticity. This project is developed as an individual endeavor for a 15-week timeframe.

## Features

- **Text Input**: Users can enter news articles or statements into a text box for evaluation.
- **Credibility Assessment**: The application processes the input using the Gemini API to determine its truthfulness.
- **Result Display**: Users receive a response indicating whether the content is likely true, false, or uncertain, along with an explanation for the assessment.

## Technologies Used

- **Frontend**: React.js with TypeScript and Vite
- **Package Manager**: pnpm
- **API Integration**: Google Gemini API

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (v7 or higher)
- Gemini API key (from [Google AI Studio](https://ai.google.dev/))

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd misinformation-detector
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory and add your Gemini API key:
   ```
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

### Running the Application

1. Start the development server:
   ```bash
   pnpm dev
   ```

2. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
pnpm build
```

The build artifacts will be stored in the `dist/` directory.

## Usage

1. Enter or paste a news article, statement, or claim into the text area.
2. Click the "Analyze Text" button.
3. View the analysis results, including:
   - Credibility assessment (Likely Credible, Likely Misinformation, or Uncertain)
   - Credibility score
   - Detailed explanation of the assessment

## Important Notes

- This tool is for educational purposes only.
- Always verify information from multiple reliable sources.
- The AI analysis should be used as a starting point for your own research.

## License

[MIT License](LICENSE)
