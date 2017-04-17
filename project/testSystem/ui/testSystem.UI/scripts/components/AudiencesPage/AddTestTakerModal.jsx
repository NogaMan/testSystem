import React from 'react';
import { Modal, Button, FormGroup, FormControl } from 'react-bootstrap';
import CoolInputOverlay from '../CoolInputOverlay.jsx';

var defaultState = {
  email: "",
  contactInfo: {
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    companyName: "",
    departmentName: "",
    positionName: "",
    location: ""
  }
};

class AddTestTakerModal extends React.Component {
  constructor() {
    super();
    this.state = defaultState;
  }

  onPropChange(prop, value) {
    const contactInfo = Object.assign({}, this.state.contactInfo, { [prop]: value });
    this.setState({ contactInfo });
  }

  onEmailChange(email) {
    this.setState({ email });
  }

  onSubmit() {
    this.props.onTestTakerAdd({
      email: this.state.email,
      contactInfo: this.state.contactInfo
    });
    this.setState(defaultState);
  }

  render() {
    const testTaker = this.state.contactInfo,
      email = this.state.email;
    return <Modal
      className="cool-inputs"
      show={this.props.show}
      onHide={() => this.props.onClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Add Test Taker</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormGroup>
          <FormControl
            onChange={(e) => this.onEmailChange(e.target.value)}
            value={email} />
          <CoolInputOverlay title="E-Mail" out={email.length > 0} />
        </FormGroup>
        <hr />
        <FormGroup>
          <FormControl
            onChange={(e) => this.onPropChange("firstName", e.target.value) }
            value={testTaker.firstName} />
          <CoolInputOverlay title="First Name" out={testTaker.firstName.length > 0} />
        </FormGroup>
        <FormGroup>
          <FormControl
            onChange={(e) => this.onPropChange("lastName", e.target.value)}
            value={testTaker.lastName} />
          <CoolInputOverlay title="Last Name" out={testTaker.lastName.length > 0} />
        </FormGroup>
        <FormGroup>
          <FormControl
            componentClass="select"
            placeholder="Gender"
            onChange={(e) => this.onPropChange("gender", e.target.value)}
            value={testTaker.gender}>

            <option value="">--</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <FormControl
            onChange={(e) => this.onPropChange("dateOfBirth", e.target.value)}
            value={testTaker.dateOfBirth} />
          <CoolInputOverlay title="Birth Date" out={testTaker.dateOfBirth.length > 0} />
        </FormGroup>
        <FormGroup>
          <FormControl
            onChange={(e) => this.onPropChange("companyName", e.target.value)}
            value={testTaker.companyName} />
          <CoolInputOverlay title="Company" out={testTaker.companyName.length > 0} />
        </FormGroup>
        <FormGroup>
          <FormControl
            onChange={(e) => this.onPropChange("departmentName", e.target.value)}
            value={testTaker.departmentName} />
          <CoolInputOverlay title="Department" out={testTaker.departmentName.length > 0} />
        </FormGroup>
        <FormGroup>
          <FormControl
            onChange={(e) => this.onPropChange("positionName", e.target.value)}
            value={testTaker.positionName} />
          <CoolInputOverlay title="Position" out={testTaker.positionName.length > 0} />
        </FormGroup>
        <FormGroup>
          <FormControl
            onChange={(e) => this.onPropChange("location", e.target.value)}
            value={testTaker.location} />
          <CoolInputOverlay title="Location" out={testTaker.location.length > 0} />
        </FormGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button bsStyle="primary" onClick={() => this.onSubmit()}>Add</Button>
        <Button onClick={() => this.props.onClose()}>Close</Button>
      </Modal.Footer>
    </Modal>;
  }
}
export default AddTestTakerModal;