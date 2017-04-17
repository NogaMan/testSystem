import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
import CoolInputOverlay from '../CoolInputOverlay';

function camelCaseToRegular(string) {
  return string
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => { return str.toUpperCase(); });
}

export default class AudiencesPageFilter extends React.Component {
  constructor() {
    super();
    const filter = {
      fullName: "",
      dateOfBirth: "",
      companyName: "",
      departmentName: "",
      positionName: "",
      location: ""
    }
    Object.defineProperty(filter, 'gender', { iterable: false });
    this.state = {
      filter
    };
  }

  onFilterChange(key, string) {
    const filter = Object.assign({}, this.props.filter, { [key]: string });
    this.props.onFilterChange(filter);
  }

  render() {
    const filter = this.props.filter;
    let layout = Object.keys(filter).map((key) => {
      return <FormGroup key={key}>
        <FormControl onChange={(e) => onFilterChange(key, e.target.value)} value={filter[key]} />
        <CoolInputOverlay title={camelCaseToRegular(key)} out={filter[key].length > 0} />
      </FormGroup>;
    });
    layout.push(
      <FormGroup>
        <FormControl
          componentClass="select"
          placeholder="Gender"
          onChange={(e) => onFilterChange("gender", e.target.value)}
          value={filter.gender}>

          <option value="">--</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </FormControl>
      </FormGroup>
    );
    return layout;
  }
}