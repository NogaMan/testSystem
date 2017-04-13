import React from 'react';
import { connect } from 'react-redux';
import AddAnswerBlock from './AddAnswerBlock.jsx';

import { addAnswer, changeAnswerText, setAnswerRight, deleteAnswer } from '../../../actions/answersActions.js';

class AddAnswerBlockContainer extends React.Component {
  render() {
    const { sectionId, questionId, answers, dispatch } = this.props;
    return <AddAnswerBlock answers={answers}
      onAnswerAdd={() => dispatch(addAnswer(sectionId, questionId))}
      onAnswerTextChange={(answerId, text) => dispatch(changeAnswerText(sectionId, questionId, answerId, text))}
      onAnswerRightChange={(answerId, isRight) => dispatch(setAnswerRight(sectionId, questionId, answerId, isRight))}
      onAnswerDelete={(answerId) => dispatch(deleteAnswer(sectionId, questionId, answerId))} />
  }
}

export default connect()(AddAnswerBlockContainer);