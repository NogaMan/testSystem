import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

import ExamSection from "./ExamSection.jsx";

const ExamPage = ({test, onAnswer, onSubmit}) => {
  let layout = [];
  for (let key in test.sections) {
    let section = test.sections[key];
    layout.push(<ExamSection
      key={section.id}
      onAnswer={(questionId, AnswerId, isRight) => onAnswer(section.id, questionId, AnswerId, isRight)}
      section={section} />);
  }
  return <Row>
    <Col xs={10} xsPush={1}>
      <h2>{test.name}</h2>
      <div className="exam-test-container">
        { layout }
      </div>
      <Button onClick={() => onSubmit()}>Submit</Button>
    </Col>
  </Row>;
}

export default ExamPage;