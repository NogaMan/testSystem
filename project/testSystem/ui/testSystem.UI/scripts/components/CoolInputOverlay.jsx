import React from 'react';

export default class CoolInputOverlay extends React.Component {

  render() {
    let className = "cool-overlay";
    if (this.props.out) {
      className += " out";
    }
    
    return <div className={className}>{this.props.title}</div>
  }
}