import React from 'react';

export default class TestDetails extends React.Component {
    render() {
        return <strong>{this.props.params.id}</strong>
    }
}