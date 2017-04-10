import React from 'react';
import { connect } from 'react-redux';

import AddSectionBlock from './AddSectionBlock.jsx';
import { addSection, changeSectionName, deleteSection } from '../../actions/sectionsActions.js';

class AddSectionBlockContainer extends React.Component {
  render() {
    return <AddSectionBlock
      sections={this.props.sections}
      onSectionAdd={() => this.props.dispatch(addSection())}
      onSectionNameChange={(sectionId, name) => this.props.dispatch(changeSectionName(sectionId, name))}
      onSectionDelete={(sectionId) => this.props.dispatch(deleteSection(sectionId))}
    />
  }
}

export default connect()(AddSectionBlockContainer);