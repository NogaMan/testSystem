import React from 'react';
import { connect } from 'react-redux';
import AddTestPage from './AddTestPage.jsx';
import { closeAlert, showAlert, clearTest, changeTestName, postTest } from '../../actions/testActions.js';

const mapStateToProps = (state) => {
  return {
    test: state.test
  }
};

class AddTestPageContainer extends React.Component {
  constructor() {
    super();
    this.api = new API();
  }

  postTest() {
    const test = this.props.test;
    api.createTest(test)
      .then(() => {
        this.props.dispatch(clearTest());
        this.props.dispatch(showAlert());
      })
      .catch((e) => {
        console.log();
      });
  }

  render() {
    return <AddTestPage
      isCreated={this.props.test.justCreated}
      onAlertClose={() => this.props.dispatch(closeAlert())}
      test={this.props.test}
      onTestNameChange={(name) => this.props.dispatch(changeTestName(name))}
      onTestCreate={() => this.postTest()}
    />
  }
}

export default connect(mapStateToProps)(AddTestPageContainer);