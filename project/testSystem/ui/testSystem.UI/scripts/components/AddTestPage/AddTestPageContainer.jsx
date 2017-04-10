import React from 'react';
import { connect } from 'react-redux';
import AddTestPage from './AddTestPage.jsx';
import { changeTestName, postTest } from '../../actions/testActions.js';

const mapStateToProps = (state) => {
  return {
    test: state.test
  }
};

class AddTestPageContainer extends React.Component {

  render() {
    return <AddTestPage
      test={this.props.test}
      onTestNameChange={(name) => this.props.dispatch(changeTestName(name))}
      onTestCreate={() => this.props.dispatch(postTest())}
    />
  }
}

export default connect(mapStateToProps)(AddTestPageContainer);