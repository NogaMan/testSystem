import React from 'react';
import { Row } from 'react-bootstrap';
import RecentTests from './RecentTests.jsx';
import GroupPerformance from './GroupPerformance.jsx';
import Analytics from './Analytics.jsx';
import Api from 'fetch-polyfill';

export default class Home extends React.Component {
    getRecentTests() {
        Api()
    }

    render() {

        let tests = [];

        return <div className="home">
            <Row>
                <RecentTests />
                <GroupPerformance />
            </Row>
            <Row>
                <Analytics />
            </Row>
        </div >
    }
}