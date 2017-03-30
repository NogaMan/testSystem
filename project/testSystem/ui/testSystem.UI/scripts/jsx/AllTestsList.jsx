import React from 'react';
import { Row, Col } from 'react-bootstrap';

import AllTestsTable from './AllTestsTable.jsx';

export default class AllTestsList extends React.Component {
    render() {
        return <Row>
            <Col xs={12}>
                <h2>Tests List</h2>
                <AllTestsTable />
            </Col>
        </Row>
    }
}