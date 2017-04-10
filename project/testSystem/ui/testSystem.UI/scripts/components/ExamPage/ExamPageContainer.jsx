import React from 'react';
import { connect } from 'react-redux';
import ExamPage from './ExamPage.jsx';
import { setAnswer } from '../../actions/examActions.js';

const mapStateToProps = (state) => {
  return {
    test: state.test
  }
};

class ExamPageContainer extends React.Component {

  render() {
    return <ExamPage
      test={this.props.test}
      onAnswer={(sectionId, questionId, answerId, isRight) => this.props.dispatch(setAnswer(sectionId, questionId, answerId, isRight))}
    />
  }
}

export default connect(mapStateToProps)(ExamPageContainer);