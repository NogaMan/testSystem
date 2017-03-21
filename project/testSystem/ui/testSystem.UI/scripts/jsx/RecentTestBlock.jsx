import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class RecentTestBlock extends React.Component {
    render() {
        return <Row>
            <Col className="block" xs={11}>
                <h3>{this.props.name}</h3>
                <p>{this.props.percent}% pass</p>
            </Col>
        </Row>
    }
}