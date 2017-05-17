import React from 'react';

import ExamAnswer from "./ExamAnswer.jsx";

const ExamQuestion = ({question, onAnswer}) => {
  let layout = [];
  for (let key in question.answers) {
    let answer = question.answers[key];
    layout.push(<ExamAnswer
      key={answer.id}
      answer={answer}
      onAnswer={(isRight) => onAnswer(answer.id, isRight)} />);
  }
  return <div className="question">
    <p dangerouslySetInnerHTML={{ __html: question.text }} />
    { layout }
  </div>;
}
export default ExamQuestion;