import Card from "../Card/Card";
import "./CardContainer.css";

export default function CardContainer({ questions }) {
  return (
    <div className="card-container">
      {questions.map((question) => (
        <Card
          key={question.id}
          id={question.id}
          question={question.question}
          answer={question.answer}
          link={question.link}
          tags={question.tags}
          isBookmarked={question.bookmarked}
        />
      ))}
    </div>
  );
}
