import React from 'react';
import { Modal, Button, FormGroup, FormControl } from 'react-bootstrap';
import CoolInputOverlay from '../CoolInputOverlay.jsx';

class AddAudienceModal extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ""
    }
  }

  onNameChange(name) {
    this.setState({ name: name });
  }

  onSubmit() {
    this.props.onAudienceAdd(this.state.name);
    this.setState({
      name: ""
    });
  }

  render() {
    return <Modal
      className="cool-inputs"
      show={this.props.show}
      onHide={() => this.props.onClose()}>
      <Modal.Header closeButton>
        <Modal.Title>Add Audience</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormGroup>
          <FormControl onChange={(e) => this.onNameChange(e.target.value)} value={this.state.name} />
          <CoolInputOverlay title="Name" out={this.state.name.length > 0} />
        </FormGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button bsStyle="primary" onClick={() => this.onSubmit()}>Add</Button>
        <Button onClick={() => this.props.onClose()}>Close</Button>
      </Modal.Footer>
    </Modal>;
  }
}
export default AddAudienceModal;