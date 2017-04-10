import React from 'react';
import {
  Radio, Checkbox, //Inputs
} from 'react-bootstrap';


const RightAnswerControl = ({answer, onAnswerRightChange, children}) => {
  let rightAnswerControl;
  if (answer.type === "multiple") {
    rightAnswerControl = <Checkbox
      inline
      checked={answer.isRight}
      onChange={(e) => onAnswerRightChange(answer.id, e.target.checked)}>
      {children}
    </Checkbox>;
  } else {
    rightAnswerControl = <Radio
      inline
      checked={answer.isRight}
      name={"answer" + answer.questionId}
      onChange={(e) => onAnswerRightChange(answer.id, e.target.checked)}>
      {children}
    </Radio>;
  }
  return rightAnswerControl;
}
export default RightAnswerControl;