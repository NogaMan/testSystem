import React from 'react';
import { Row, Col } from 'react-bootstrap';

const TestDetailsInfoBlock = ({ test }) => {
  if (!test) {
    return <h3>Loading...</h3>;
  }
  return <div className="test-info">
    <h2>{test.name}</h2>
    <p>{test.sectionsCount + " section" + (test.sectionsCount > 1 ? 's' : '')}</p>
    <p><strong>Passed:</strong> {test.passedCount}/{test.invitedCount}</p>
    <p><strong>Avg. Points:</strong> {test.averageResult}</p>
  </div>;
}

export default TestDetailsInfoBlock;