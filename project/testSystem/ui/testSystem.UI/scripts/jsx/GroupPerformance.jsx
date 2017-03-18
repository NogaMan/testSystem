import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class GroupPerformance extends React.Component {
    render() {
        return <Col xs={5} className="group-performance">
            <h2>Group performance</h2>
            <Row>
                <Col className="block" xs={12}>
                    <h2>Sales team</h2>
                    <div className="rate">
                        <div className="stars">RRRRR</div>
                        <div className="p">4.97/5.00</div>
                    </div>
                    <div className="out-of">out of 7 tests</div>
                </Col>
            </Row>
            <Row>
                <Col className="block" xs={12}>
                    <h2>Service desk team</h2>
                    <div className="rate">
                        <div className="stars">RRRRЯ</div>
                        <div className="p">4.21/5.00</div>
                    </div>
                    <div className="out-of">out of 12 tests</div>
                </Col>
            </Row>
        </Col>
    }
}