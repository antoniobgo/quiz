import quizCompleteUrl from "../assets/quiz-complete.png";
import { useState, useCallback } from "react";

import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";

export default function Quiz(params) {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const currentQuestion = QUESTIONS[activeQuestionIndex];

  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevUserAnswer) => [...prevUserAnswer, selectedAnswer]);
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (isQuizComplete)
    return (
      <div id="summary">
        <img src={quizCompleteUrl} alt="Trohphy Icon" />
        <h2>Quiz complete</h2>
      </div>
    );

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
