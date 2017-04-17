import React from 'react';

const TestTakerBlock = ({testTaker, onTestTakerDelete}) => {
  return <li className="test-taker-block">
    <span
      className="test-taker-name">
      {`${testTaker.contactInfo.firstName} ${testTaker.contactInfo.lastName}`}
    </span> ({testTaker.email})
    <div className="delete-test-taker" onClick={() => onTestTakerDelete()}>&times;</div>
  </li>
}
export default TestTakerBlock;