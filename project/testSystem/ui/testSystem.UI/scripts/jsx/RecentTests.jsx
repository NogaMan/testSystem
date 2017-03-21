import React from 'react';
import { Row, Col } from 'react-bootstrap';

import RecentTestBlock from './RecentTestBlock.jsx';

export default class RecentTests extends React.Component {
    render() {
        let tests = [
            {
                id: 1,
                name: "Lead management",
                percent: 60,
            },
            {
                id: 2,
                name: "English spelling (US version)",
                percent: 97,
            },
        ];
        let blocks = tests.map(function (t) {
            return <RecentTestBlock key={t.id} name={t.name} percent={t.percent} />;
        });
        return <Col xs={5} xsOffset={1} className="recent-tests">
            <h2>Recent tests</h2>
            {blocks}
        </Col>
    }
}