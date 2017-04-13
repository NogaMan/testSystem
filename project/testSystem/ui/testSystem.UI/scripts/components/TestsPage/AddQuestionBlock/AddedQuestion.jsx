import React from 'react';
import { Button, FormControl, FormGroup } from 'react-bootstrap';

import CoolInputOverlay from "../../CoolInputOverlay.jsx";
import AddAnswerBlockContainer from "../AddAnswerBlock/AddAnswerBlockContainer.jsx";

const AddedQuestion = ({sectionId, i, question, onQuestionTextChange, onQuestionDelete}) => {
  return <div className="question">
    <div className="delete-sign" onClick={(e) => onQuestionDelete(question.id)}>&#10005;</div>
    <FormGroup>
      <FormControl
        componentClass="textarea"
        value={question.text}
        onChange={(e) => onQuestionTextChange(question.id, e.target.value)} />
      <CoolInputOverlay title={"Question " + (i + 1)} out={question.text.length} />
    </FormGroup>
    <AddAnswerBlockContainer sectionId={sectionId} questionId={question.id} answers={question.answers} />
  </div>;
}
export default AddedQuestion;