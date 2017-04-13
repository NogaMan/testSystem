import React from 'react';

import RightAnswerControl from "../AddAnswerBlock/RightAnswerControl.jsx";

const ExamAnswer = ({answer, onAnswer}) => {
  return <div className="answer">
    <RightAnswerControl
      answer={answer}
      onAnswerRightChange={(id, isRight) => onAnswer(isRight)}>
      <span>{answer.text}</span>
    </RightAnswerControl>
  </div>;
}
export default ExamAnswer;