import { useState } from "react";

import QUESTIONS from "../questions.js";

export default function Quiz(params) {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const currentQuestion = QUESTIONS[activeQuestionIndex];

  const handleSelectAnswer = (selectedAnswer) => {
    setUserAnswers((prevUserAnswer) => [...prevUserAnswer, selectedAnswer]);
  };

  return (
    <div id="quiz">
      <div id="question">
        <p>{currentQuestion.text}</p>
        <ul id="answers">
          {currentQuestion.answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
