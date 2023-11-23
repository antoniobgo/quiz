import quizLogoUrl from "../assets/quiz-logo.png";

export default function Header(params) {
  return (
    <header>
      <img src={quizLogoUrl} alt="" />
      <h1>ReactQuiz</h1>
    </header>
  );
}
