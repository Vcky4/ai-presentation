import React, { useState } from 'react';

type Question = {
  id: number;
  scenario: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
  }[];
};

const questions: Question[] = [
  {
    id: 1,
    scenario: "Automating Daily Data Syncs: Moving data from Shopify to Google Sheets every night at 12 AM.",
    options: [
      { id: 'a', text: 'Good Old Automation (Zapier, Cron)', isCorrect: true, explanation: 'Correct! The inputs and rules are 100% predictable and static. Traditional automation is the fastest, cheapest, and most reliable.' },
      { id: 'b', text: 'AI Agent', isCorrect: false, explanation: 'Incorrect. An Agent is overkill. There is no need for multi-step reasoning or autonomous tool use here.' },
      { id: 'c', text: 'LLM Solution', isCorrect: false, explanation: 'Incorrect. There is no natural language to parse or generate here.' },
      { id: 'd', text: 'Standard Code', isCorrect: false, explanation: 'Standard code works, but simple automation tools (like Zapier or cron) are the most direct approach for 100% predictable data movement.' }
    ]
  },
  {
    id: 2,
    scenario: "Real-time Dynamic Customer Support: A bot that can check a user's order status, process a refund if eligible, and draft a personalized apology email all in one conversation.",
    options: [
      { id: 'a', text: 'Good Old Automation', isCorrect: false, explanation: 'Incorrect. Automation cannot handle dynamic conversations or multi-step reasoning.' },
      { id: 'b', text: 'AI Agent', isCorrect: true, explanation: 'Correct! This requires memory (state), tool use (checking status, processing refund), and dynamic multi-step reasoning.' },
      { id: 'c', text: 'LLM Solution', isCorrect: false, explanation: 'Incorrect. An LLM alone is just a brain in a jar. It cannot process refunds without an orchestration layer (Agent) giving it tools.' },
      { id: 'd', text: 'Standard Code', isCorrect: false, explanation: 'Incorrect. Handling unpredictable natural language in a conversation is nearly impossible with standard code.' }
    ]
  },
  {
    id: 3,
    scenario: "Batch Categorizing Unformatted Text: Analyzing 10,000 raw customer feedback submissions and classifying them into 'Feature Request', 'Bug', or 'Praise'.",
    options: [
      { id: 'a', text: 'Good Old Automation', isCorrect: false, explanation: 'Incorrect. Automation cannot comprehend natural language text reliably.' },
      { id: 'b', text: 'AI Agent', isCorrect: false, explanation: 'Incorrect. An Agent is overkill. There is no multi-step autonomous behavior needed here, just a single processing step.' },
      { id: 'c', text: 'LLM Solution', isCorrect: true, explanation: 'Correct! The input is messy natural language. You just need to process the data and return an insight based on semantic understanding.' },
      { id: 'd', text: 'Standard Code', isCorrect: false, explanation: 'Incorrect. Standard code would struggle significantly with messy, varied natural language without strict structures.' }
    ]
  },
  {
    id: 4,
    scenario: "Calculating Delivery Routes: Finding the fastest path for 50 delivery trucks through a city considering distance and current traffic data.",
    options: [
      { id: 'a', text: 'Good Old Automation', isCorrect: false, explanation: 'Incorrect. Zapier cannot calculate complex math dynamically.' },
      { id: 'b', text: 'AI Agent', isCorrect: false, explanation: 'Incorrect. An Agent would likely hallucinate or be too slow for strict mathematical optimization.' },
      { id: 'c', text: 'LLM Solution', isCorrect: false, explanation: 'Incorrect. LLMs are probabilistic language models, not calculators. They struggle with strict logic and math constraints.' },
      { id: 'd', text: 'Standard Code', isCorrect: true, explanation: 'Correct! Strict logic, math, and deterministic algorithms (like Dijkstra\'s or A*) belong in traditional programming, not AI.' }
    ]
  }
];

export const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionClick = (optionId: string) => {
    if (showFeedback) return;
    setSelectedOptionId(optionId);
    setShowFeedback(true);

    const option = currentQuestion.options.find(o => o.id === optionId);
    if (option?.isCorrect) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(i => i + 1);
      setSelectedOptionId(null);
      setShowFeedback(false);
    } else {
      setQuizComplete(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionId(null);
    setShowFeedback(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    return (
      <div className="quiz-container align-center text-center">
        <h2 style={{ marginBottom: '1rem' }}>Quiz Complete!</h2>
        <div style={{ fontSize: '4rem', fontWeight: 'bold', margin: '2rem 0', color: 'var(--accent-purple)' }}>
          {score} / {questions.length}
        </div>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          {score === questions.length ? "Perfect score! You truly understand when to use AI." : "Great effort! Keep practicing your AI architecture decision making."}
        </p>
        <div>
          <button className="btn-primary" onClick={restartQuiz}>Retake Quiz</button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container animate-fade-up">
      <div className="quiz-question-header">Test Your Knowledge • Question {currentQuestionIndex + 1} of {questions.length}</div>
      <div className="quiz-scenario">
        {currentQuestion.scenario}
      </div>
      
      <div className="quiz-options">
        {currentQuestion.options.map(option => {
          let className = "quiz-option";
          if (showFeedback) {
            if (option.id === selectedOptionId) {
              className += option.isCorrect ? " correct" : " incorrect";
            } else if (option.isCorrect) {
              className += " correct"; // highlight correct answer if they got it wrong
            }
          } else if (option.id === selectedOptionId) {
            className += " selected";
          }

          return (
            <button 
              key={option.id}
              className={className}
              onClick={() => handleOptionClick(option.id)}
              disabled={showFeedback}
            >
              {option.text}
            </button>
          );
        })}
      </div>

      {showFeedback && (
        <div className={`quiz-feedback ${currentQuestion.options.find(o => o.id === selectedOptionId)?.isCorrect ? 'success' : 'error'}`}>
          <h4>{currentQuestion.options.find(o => o.id === selectedOptionId)?.isCorrect ? '✨ Correct!' : '❌ Not Quite...'}</h4>
          <p style={{ margin: 0, fontSize: '1.1rem' }}>
            {currentQuestion.options.find(o => o.id === selectedOptionId)?.explanation}
          </p>
          <div style={{ marginTop: '1rem' }}>
            <button className="btn-primary" onClick={nextQuestion}>
              {currentQuestionIndex < questions.length - 1 ? 'Next Question ➞' : 'See Results ➞'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
