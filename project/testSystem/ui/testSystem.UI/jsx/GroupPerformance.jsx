import React from 'react';

export default class GroupPerformance extends React.Component {
    render() {
        return <div class="blocks">
            <h2>Group performance</h2>
            <div class="block">
                <h2>Sales team</h2>
                <div class="rate">
                    <div class="stars">RRRRR</div>
                    <div class="p">4.97/5.00</div>
                </div>
                <div class="out-of">out of 7 tests</div>
            </div>
            <div class="block">
                <h2>Service desk team</h2>
                <div class="rate">
                    <div class="stars">RRRRЯ</div>
                    <div class="p">4.21/5.00</div>
                </div>
                <div class="out-of">out of 12 tests</div>
            </div>
        </div>
    }
}