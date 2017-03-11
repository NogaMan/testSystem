import React from 'react';
import RecentTests from './RecentTests.jsx';
import GroupPerformance from './GroupPerformance.jsx';
import Analytics from './Analytics.jsx';

export default class Home extends React.Component {
    render() {
        return <div id="home">
            <div className="row">
                <RecentTests />
                <GroupPerformance />
            </div>
            <div className="row">
                <Analytics />
            </div>
        </div >
    }
}