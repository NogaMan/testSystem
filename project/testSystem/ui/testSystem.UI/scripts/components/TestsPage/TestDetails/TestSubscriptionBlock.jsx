import React from 'react';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const TestSubscriptionBlock = ({ availableGroups, onAudienceSubscribe }) => {
  let layout = [];
  if (!availableGroups || Object.keys(availableGroups).length == 0) {
    layout = <h4>Loading...</h4>;
  } else {
    let listItems = Object.keys(availableGroups).map((groupKey, i) => {
      const group = availableGroups[groupKey];
      return <ListGroupItem key={group.id} onClick={() => onAudienceSubscribe(group.id)}>
        {`#${i}. ${group.name} (${group.testTakersCount} participants)`}
      </ListGroupItem>;
    });
    layout = <ListGroup>
      { listItems }
    </ListGroup>;
  }
  return <div className="subscription-block">
    <h3>Available To Subscribe:</h3>
    { layout }
  </div>
}

export default TestSubscriptionBlock;