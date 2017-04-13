import React from 'react';

import ExamQuestion from "./ExamQuestion.jsx";

const ExamSection = ({section, onAnswer}) => {
  const layout = [];
  for (let key in section.questions) {
    let question = section.questions[key];
    layout.push(<ExamQuestion
      key={question.id}
      question={question}
      onAnswer={(answerId, isRight) => onAnswer(question.id, answerId, isRight)} />);
  }
  return <div className="section">
    <h2>{section.name}</h2>
    {layout}
  </div>;
}

export default ExamSection;