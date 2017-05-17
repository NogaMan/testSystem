import React from 'react';
import { Row, Col } from 'react-bootstrap';

import API from '../../../api.js';

import TestDetails from './TestDetails.jsx';
import ConfirmSubscribeModal from './ConfirmSubscribeModal.jsx';

export default class TestDetailsContainer extends React.Component {
  constructor() {
    super();
    this.api = new API();
    this.state = {
      requestedSubscriptionGroupId: null,
      test: {},
      participations: {},
      availableGroups: {}
    }
  }

  componentDidMount() {
    this.initTest();
  }

  initTest() {
    const testId = this.props.params.id;
    this.api.getDetailedTestInfo(testId)
      .then((info) => {
        this.setState({
          test: {
            id: info.testId,
            name: info.testName,
            sectionsCount: info.sectionsCount,
            passedCount: info.passedCount,
            invitedCount: info.invitedCount,
            averageResult: info.averageResult,
          },
          participations: info.participations,
          availableGroups: info.availableGroups
        })
      });
  }

  subscribe() {
    const groupId = this.state.requestedSubscriptionGroupId;
    const testId = this.state.test.id;
    this.api.subscribeGroupToTest(testId, groupId)
      .then(() => this.closeSubscribeConfirmModal())
      .then(() => this.initTest());
  }

  openSubscribeConfirmModal(groupId) {
    this.setState({
      requestedSubscriptionGroupId: groupId
    });
  }

  closeSubscribeConfirmModal() {
    this.setState({
      requestedSubscriptionGroupId: null
    });
  }

  render() {
    const { test, participations, availableGroups } = this.state;
    const requestedGroupId = this.state.requestedSubscriptionGroupId;
    const requestedGroupName = requestedGroupId ? availableGroups[requestedGroupId] && availableGroups[requestedGroupId].name : "";
    return <div>
      <TestDetails
        test={test}
        participations={participations}
        availableGroups={availableGroups}
        onAudienceSubscribe={(id) => this.openSubscribeConfirmModal(id)}
      />
      <ConfirmSubscribeModal
        show={requestedGroupId != null}
        testName={test.name}
        groupName={requestedGroupName}
        onClose={() => this.closeSubscribeConfirmModal()}
        onConfirm={() => this.subscribe()}/>
    </div>
  }
}