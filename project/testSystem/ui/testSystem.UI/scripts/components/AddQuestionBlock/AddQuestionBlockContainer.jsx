import React from 'react';
import { connect } from 'react-redux';

import { addQuestion, changeQuestionText, deleteQuestion} from '../../actions/questionsActions.js';

import AddQuestionBlock from './AddQuestionBlock.jsx';

class AddQuestionBlockContainer extends React.Component {
  render() {
    const { section } = this.props;
    return <AddQuestionBlock
      sectionId={section.id}
      questions={section.questions}
      onQuestionAdd={(type) => this.props.dispatch(addQuestion(section.id, type))}
      onQuestionTextChange={(questionId, text) => this.props.dispatch(changeQuestionText(section.id, questionId, text))}
      onQuestionDelete={(questionId) => this.props.dispatch(deleteQuestion(section.id, questionId))}
    />
  }
}

export default connect()(AddQuestionBlockContainer);