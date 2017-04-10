import React from 'react';
import {
  Row, Col, Button,
  FormGroup, FormControl,
} from 'react-bootstrap';

import CoolInputOverlay from "../CoolInputOverlay.jsx";
import AddSectionBlockContainer from "../AddSectionBlock/AddSectionBlockContainer.jsx";

const AddTestPage = ({test, onTestNameChange, onTestCreate}) => <Row>
  <Col xs={10} xsPush={1}>
    <h3>Add test form</h3>
    <div className="add-test-container cool-inputs">
      <FormGroup>
        <FormControl onChange={(e) => onTestNameChange(e.target.value)} value={test.name} />
        <CoolInputOverlay title="Test Name" out={test.name.length > 0} />
      </FormGroup>
      <AddSectionBlockContainer sections={test.sections} />
      <Button onClick={() => onTestCreate()}>Post Test</Button>
    </div>
  </Col>
</Row>;

export default AddTestPage;