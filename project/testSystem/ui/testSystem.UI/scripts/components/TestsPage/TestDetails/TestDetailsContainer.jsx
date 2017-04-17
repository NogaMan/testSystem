import React from 'react';
import { Row, Col } from 'react-bootstrap';

import AllTestsTable from './AllTestsTable.jsx';

import API from '../../../api.js';

export default class TestDetails extends React.Component {
  constructor() {
    super();
    this.api = new API();
    this.state = {
      test: {},
      participants: {},
      availableAudiences: {}
    }
  }

  initTest() {
    this.api.getDetailedTestInfo()
      .then((info) => {
        this.setState({
          test: info.test,
          participants: info.participants,
          availableAudiences: info.availableAudiences
        })
      });
  }

  subscribe

  render() {
    return <div className="all-tests-list" >
      <Row>
        <Col xs={12}>
          <h2>Tests List</h2>
          <AllTestsTable />
        </Col>
      </Row>
    </div>
  }
}