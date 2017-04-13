import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import AddedQuestion from "./AddedQuestion.jsx";

const AddQuestionBlock = ({sectionId, questions, onQuestionAdd, onQuestionTextChange, onQuestionDelete}) => {
  const layout = [];
  for (let questionId in questions) {
    let q = questions[questionId];
    let i = 0;
    layout.push(
      <AddedQuestion
        sectionId={sectionId}
        i={i++}
        key={q.id}
        question={q}
        onQuestionTextChange={(questionId, text) => onQuestionTextChange(questionId, text)}
        onQuestionDelete={(questionId) => onQuestionDelete(questionId)}
      />
    );
  }
  return <div className="add-questions-container" >
    {layout}
    <DropdownButton bsStyle="primary" title="Add Question" id={'AddQuestionButton' + sectionId} >
      <MenuItem onClick={() => onQuestionAdd("single")}>Single Answer</MenuItem>
      <MenuItem onClick={() => onQuestionAdd("multiple")}>Multiple choice</MenuItem>
    </DropdownButton>
  </div>
};

export default AddQuestionBlock;