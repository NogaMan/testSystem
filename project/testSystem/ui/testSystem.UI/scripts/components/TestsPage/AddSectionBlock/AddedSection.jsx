import React from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

import CoolInputOverlay from "../../CoolInputOverlay.jsx";
import AddQuestionBlockContainer from "../AddQuestionBlock/AddQuestionBlockContainer.jsx";

const AddedSection = ({section, onSectionNameChange, onSectionDelete}) => <div className="section">
  <div className="delete-sign" onClick={(e) => onSectionDelete(section.id)}>&#10005;</div>
  <FormGroup>
    <FormControl onChange={(e) => onSectionNameChange(section.id, e.target.value)} value={section.name} />
    <CoolInputOverlay title="Section Name" out={section.name.length} />
  </FormGroup>
  <AddQuestionBlockContainer section={section} />
</div>;

export default AddedSection;