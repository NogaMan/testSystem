import React from 'react';
import { Row, Col } from 'react-bootstrap';
import TestDetailsInfoBlock from './TestDetailsInfoBlock.jsx';
import TestSubscriptionBlock from './TestSubscriptionBlock.jsx';
import TestParticipationsInfoBlock from './TestParticipationsInfoBlock.jsx';

const TestDetails = ({ test, participations, availableGroups, onAudienceSubscribe }) => {

  return <div className="test-details" >
    <Row>
      <Col xs={12}>
        <TestDetailsInfoBlock test={test} />
      </Col>
    </Row>
    <Row>
      <Col xs={3}>
        <TestSubscriptionBlock availableGroups={availableGroups} onAudienceSubscribe={(groupId) => onAudienceSubscribe(groupId)} />
      </Col>
      <Col xs={9}>
        <TestParticipationsInfoBlock participations={participations} />
      </Col>
    </Row>
  </div>
}

export default TestDetails;