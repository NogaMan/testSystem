import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router';

import AllTestsTable from './AllTestsTable.jsx';

export default class AllTestsList extends React.Component {
  render() {
    return <div className="all-tests-list" >
      <Row>
        <Col xs={12}>
          <h2>Tests List
            <Link to="tests/add" className="add-test-button">
              <Button bsStyle="primary">Add Test</Button>
            </Link>
          </h2>
          <AllTestsTable />
        </Col>
      </Row>
    </div>
  }
}