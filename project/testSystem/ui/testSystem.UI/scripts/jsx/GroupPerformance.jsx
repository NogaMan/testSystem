import React from 'react';
import { Row, Col } from 'react-bootstrap';
import GroupPerformanceBlock from './GroupPerformanceBlock.jsx';

export default class GroupPerformance extends React.Component {
    render() {
        const groupPerformances = [
            {
                id: 1,
                name: "Sales team",
                testCount: 7,
                rate: 4.97,
            },
            {
                id: 2,
                name: "Service desk team",
                testCount: 12,
                rate: 3.21,
            },
        ];
        let blocks = groupPerformances.map(function (p) {
            return <GroupPerformanceBlock key={p.id} name={p.name} testCount={p.testCount} rate={p.rate} />
        });
        return <Col xs={5} className="group-performance">
            <h2>Group performance</h2>
            {blocks}
        </Col>
    }
}