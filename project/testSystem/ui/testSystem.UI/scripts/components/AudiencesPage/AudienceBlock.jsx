import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import TestTakerBlock from './TestTakerBlock.jsx';

const AudienceBlock = ({ audience, onTestTakerAddClick, onAudienceDeleteClick, onTestTakerDelete }) => {
  let testTakers = [];
  if (Object.keys(audience.testTakers).length > 0) {
    for (let key in audience.testTakers) {
      let testTaker = audience.testTakers[key];
      testTakers.push(
        <TestTakerBlock
          key={testTaker.id}
          testTaker={testTaker}
          onTestTakerDelete={() => onTestTakerDelete(testTaker.id)}
        />
      );
    }
  } else {
    testTakers = <p>No test takers yet.</p>;
  }
  return <Row className="audience-block">
    <Col>
      <h3>{audience.name}
        <Button bsClass="danger" className="delete-audience" onClick={() => onAudienceDeleteClick()}>&times;</Button>
      </h3>
      <ul>
        {testTakers}
      </ul>
      <Button onClick={() => onTestTakerAddClick()}>Add Test Taker</Button>
    </Col>
  </Row>
}
export default AudienceBlock;