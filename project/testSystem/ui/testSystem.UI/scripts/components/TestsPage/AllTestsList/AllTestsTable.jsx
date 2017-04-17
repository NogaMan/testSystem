import React from 'react';
import { Table, Modal, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

import API from '../../../api.js';
import AllTestsTableControls from './AllTestsTableControls.jsx';

export default class AllTestsTable extends React.Component {
    constructor() {
        super();
        this.api = new API();
        this.state = {
            tests: [],
            requestedDeleteId: null
        };
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
      if (id) {
        this.api.deleteTest(id)
          .then(() => {
            const tests = this.state.tests.filter((test) => test.id != id);
            this.setState({ tests });
          })
      } else {
        this.closeDeleteModal();
      }
    }

    render() {
        const tests = this.state.tests;
        let layout;
        if (tests.length > 0) {
            let rows = tests.map((test, i) => {
                    return <tr key={test.id}>
                        <td>{i++}</td>
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
              <Link to="tests/add">
                <Button bsStyle="primary">Add Test</Button>
              </Link>
                <Table striped hover className="tests-table">
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>ID</td>
                            <td>Name</td>
                            <td class="tests-table-actions">Actions</td>
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
            layout = <p>No tests yet</p>
        }
        return layout;
    }
}