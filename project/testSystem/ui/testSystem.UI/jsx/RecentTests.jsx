import React from 'react';

export default class RecentTests extends React.Component {
    render() {
        return <div class="blocks">
            <h2>Recent tests</h2>
            <div class="block">
                <h3>Lead management</h3>
                <p>60% pass</p>
            </div>
            <div class="block">
                <h3>English spelling (US version)</h3>
                <p>97% pass</p>
            </div>
        </div>
    }
}