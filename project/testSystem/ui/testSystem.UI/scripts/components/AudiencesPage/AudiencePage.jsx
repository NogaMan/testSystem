import React from 'react';
import AudienceBlock from './AudienceBlock.jsx';
import { Button } from 'react-bootstrap';

const AudiencesPage = ({ audiences, onTestTakerAddClick, onAudienceDeleteClick, onTestTakerDelete }) => {
  const layout = [];
  if (Object.keys(audiences).length > 0) {
    for (let key in audiences) {
      const audience = audiences[key];
      layout.push(
        <AudienceBlock
          key={audience.id}
          audience={audience}
          onTestTakerAddClick={() => onTestTakerAddClick(audience.id)}
          onAudienceDeleteClick={() => onAudienceDeleteClick(audience.id)}
          onTestTakerDelete={(testTakerId) => onTestTakerDelete(audience.id, testTakerId)}
        />
      );
    }
  } else {
    layout.push(<p>No groups yet.</p>);
  }
  return <div>{layout}</div>;
}
export default AudiencesPage;