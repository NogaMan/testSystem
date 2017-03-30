import React from 'react';
import { Table } from 'react-bootstrap';
import { browserHistory } from 'react-router'

import API from '../api.js';
import AllTestsTableControls from './AllTestsTableControls.jsx';

export default class AllTestsTable extends React.Component {
    constructor() {
        super();
        this.api = new API();
        this.state = {
            tests: []
        };
        this.api.getAllTests()
            .then((tests) => this.setState({ tests }))
            .catch((error) => this.api.handleError(error));
    }

    editTest(id) {
        browserHistory.push(`tests/edit/${id}`);
    }

    deleteTest(id) {
        this.api.deleteTest(id)
            .then(() => {
                const tests = this.state.tests.filter((test) => test.id != id);
                this.setState({ tests });
            })
            .catch((error) => this.api.handleError(error));
    }

    render() {
        const tests = this.state.tests;
        let i = 1,
            rows = tests.map(function (test) {
                return <tr key={test.id}>
                    <td>{i++}</td>
                    <td>{test.id}</td>
                    <td>{test.name}</td>
                    <td><AllTestsTableControls id={test.id} /></td>
                </tr>
            });
        return <Table striped hover>
            <thead>
                <tr>
                    <td>#</td>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>;
    }
}