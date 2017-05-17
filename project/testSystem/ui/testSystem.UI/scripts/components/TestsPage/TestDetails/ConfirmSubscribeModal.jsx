import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmSubscribeModal = ({ show, testName, groupName, onClose, onConfirm }) => {
  return <Modal
    show={show}
    onHide={() => onClose()}>
    <Modal.Header closeButton>
      <Modal.Title>Subscription confirmation.</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Are you sure want to subscribe group "{groupName}" to the test "{testName}"?</p>
    </Modal.Body>
    <Modal.Footer>
      <Button bsStyle="primary" onClick={() => onConfirm()}>Subscribe</Button>
      <Button onClick={() => onClose()}>Close</Button>
    </Modal.Footer>
  </Modal>;
}

export default ConfirmSubscribeModal;