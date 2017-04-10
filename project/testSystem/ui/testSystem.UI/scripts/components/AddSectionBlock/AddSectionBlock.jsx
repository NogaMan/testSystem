import React from 'react';
import {
  Button, //Buttons
  FormGroup, ControlLabel, FormControl, //Inputs
} from 'react-bootstrap';

import AddedSection from './AddedSection.jsx';

const AddSectionBlock = ({sections, onSectionAdd, onSectionNameChange, onSectionDelete}) => {
  const sectionsLayout = sections.map((s) => {
    return <AddedSection
      key={s.id}
      section={s}
      onSectionNameChange={(sectionId, name) => onSectionNameChange(sectionId, name)}
      onSectionDelete={(sectionId) => onSectionDelete(sectionId)}/>
  });
  return <div className="add-sections-container">
    {sectionsLayout}
    <Button
      bsStyle="primary"
      onClick={() => onSectionAdd("ordinary")}>Add Section</Button>
  </div>
};

export default AddSectionBlock;