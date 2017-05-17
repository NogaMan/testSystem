import React from 'react';
import { Table, Modal, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';

import API from '../../../api.js';
import AllTestsTableControls from './AllTestsTableControls.jsx';

export default class AllTestsTable extends React.Component {
  constructor() {
    super();
    this.api = new API();
    this.state = {
      tests: null,
      requestedDeleteId: null
    };
  }

  componentDidMount() {
    this.api.getAllTests()
      .then((tests) => this.setState({ tests }))
      .catch((error) => this.api.handleError(error));
  }

  openDeleteModal(id) {
    this.setState({ requestedDeleteId: id });
  }

  closeDeleteModal() {
    this.setState({ requestedDeleteId: null });
  }

  editTest(id) {
    browserHistory.push(`tests/edit/${id}`);
  }

  deleteTest() {
    const id = this.state.requestedDeleteId;
    tests = this.state.tests;
    if (id && tests[id]) {
      this.api.deleteTest(id)
        .then(() => {
          delete tests[id];
          this.setState({ tests });
        })
    } else {
      this.closeDeleteModal();
    }
  }

  render() {
    const tests = this.state.tests;
    let layout;
    if (tests === null) {
      layout = <h4>Loading...</h4>
    } else {
      if (Object.keys(tests).length > 0) {
        let rows = Object.keys(tests).map((key) => {
          let test = tests[key];
          return <tr
            key={test.id}
            onClick={() => browserHistory.push(`tests/${test.id}`)}>
            <td>{key}</td>
            <td>{test.id}</td>
            <td>{test.name}</td>
            <td><AllTestsTableControls
              id={test.id}
              onEditTest={(id) => this.editTest(id)}
              onDeleteTest={(id) => this.openDeleteModal(id)}
            /></td>
          </tr>
        });
        layout = <div>
          <Table striped hover className="tests-table">
            <thead>
              <tr key="tableHeader">
                <td>#</td>
                <td>ID</td>
                <td>Name</td>
                <td className="tests-table-actions">Actions</td>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </Table>
          <Modal show={this.state.requestedDeleteId != null} onHide={() => this.closeDeleteModal()}>
            <Modal.Header closeButton>
              <Modal.Title>Delete Test</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Are you sure want to delete test #{this.state.requestedDeleteId}?</h4>
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="danger" onClick={this.deleteTest.bind(this)}>Delete</Button>
              <Button onClick={() => this.closeDeleteModal()}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>;
      } else {
        layout = <h4>No tests yet.</h4>
      }
    }
    return layout;
  }
}