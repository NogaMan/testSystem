﻿import React from 'react';
import {
  Row, Col, Button,
  FormGroup, FormControl,
  Alert
} from 'react-bootstrap';

import CoolInputOverlay from "../CoolInputOverlay.jsx";
import AddSectionBlockContainer from "../AddSectionBlock/AddSectionBlockContainer.jsx";

const AddTestPage = ({isCreated, onAlertClose, test, onTestNameChange, onTestCreate}) => {
  let alertLayout = !isCreated ? "" : <Alert bsStyle="success" onDismiss={() => onAlertClose()}>
    <strong>The test has been successfully created!</strong> Now you can subscribe your audience to take part in examination.
  </Alert>;
  return <Row>
    <Col xs={10} xsPush={1}>
      {alertLayout}
    <Alert bsStyle="success">
        <strong>The test has been successfully created!</strong> Now you can subscribe your audience to take part in examination.
  </Alert>
      <h3>Add test form</h3>
      <div className="add-test-container cool-inputs">
        <FormGroup>
          <FormControl onChange={(e) => onTestNameChange(e.target.value)} value={test.name} />
          <CoolInputOverlay title="Test Name" out={test.name.length > 0} />
        </FormGroup>
        <AddSectionBlockContainer sections={test.sections} />
        <FormGroup className="submitTest">
          <Button bsStyle="success" bsSize="lg" onClick={() => onTestCreate()}>Publish</Button>
        </FormGroup>
      </div>
    </Col>
  </Row>;
}

export default AddTestPage;