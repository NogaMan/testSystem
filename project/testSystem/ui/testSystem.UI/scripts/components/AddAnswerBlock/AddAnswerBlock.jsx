import React from 'react';
import { Button } from 'react-bootstrap';

import AddedAnswer from './AddedAnswer.jsx';
import CoolInputOverlay from "../CoolInputOverlay.jsx";

const AddAnswerBlock = ({
  answers,
  onAnswerAdd,
  onAnswerTextChange,
  onAnswerRightChange,
  onAnswerDelete
}) => {
  const layout = [];
  for (let answerId in answers) {
    let answer = answers[answerId];
    let i = 0;
    layout.push(<AddedAnswer
      i={i++}
      key={answer.id}
      answer={answer}
      onAnswerTextChange={(id, text) => onAnswerTextChange(id, text)}
      onAnswerRightChange={(id, isRight) => onAnswerRightChange(id, isRight)}
      onAnswerDelete={(id) => onAnswerDelete(id)}
    />);
  }
  return <div className="add-answers-container">
    {
      layout
    }
    <div className="btn-group">
      <Button bsStyle="default" onClick={() => onAnswerAdd()}>Add Answer</Button>
    </div>
  </div>
}

export default AddAnswerBlock;