import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default class RecentTests extends React.Component {
    render() {
        let tests = [
            {
                name: "Lead management",
                pass: 60,
            },
            {
                name: "English spelling (US version)",
                pass: 97,
            },
        ];
        /*var layout = <Col xs={5} xsOffset={1} className="recent-tests">
            <h2>Recent tests</h2>;
        tests.map((test) => {
                layout +=
                (<Row>
                    <Col className="block" xs={12}>
                        <h3>{test.name}</h3>
                        <p>{test.pass}% pass</p>
                    </Col>
                </Row>);
        });
            layout += */
        return <Col xs={5} xsOffset={1} className="recent-tests">
            <h2>Recent tests</h2>
            <Row>
                <Col className="block" xs={12}>
                    <h3>Lead management</h3>
                    <p>60% pass</p>
                </Col>
            </Row>
            <Row>
                <Col className="block" xs={12}>
                    <h3>English spelling (US version)</h3>
                    <p>97% pass</p>
                </Col>
            </Row>
        </Col>
    }
}