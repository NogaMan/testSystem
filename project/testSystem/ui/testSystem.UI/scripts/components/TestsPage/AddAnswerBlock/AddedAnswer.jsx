import React from 'react';
import { Button, FormControl, FormGroup } from 'react-bootstrap';

import CoolInputOverlay from "../../CoolInputOverlay.jsx";
import RightAnswerControl from "./RightAnswerControl.jsx";

const AddedAnswer = ({i, answer, onAnswerTextChange, onAnswerRightChange, onAnswerDelete}) => {
  return <div className="answer">
    <div className="delete-sign" onClick={(e) => onAnswerDelete(answer.id)}>&#10005;</div>
    <RightAnswerControl answer={answer} onAnswerRightChange={(id, isRight) => onAnswerRightChange(id, isRight)}>
      <FormGroup>
        <FormControl
          value={answer.text}
          onChange={(e) => onAnswerTextChange(answer.id, e.target.value)} />
        <CoolInputOverlay title={"Answer " + (i + 1)} out={answer.text.length} />
      </FormGroup>
    </RightAnswerControl>
  </div>;
}
export default AddedAnswer;