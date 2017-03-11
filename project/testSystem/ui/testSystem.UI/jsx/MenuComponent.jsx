import React from 'react';
import { Router, Route, Link } from 'react-router';

export default class MenuComponent extends React.Component {
    render() {
        return <div className="menu">
            <ul>
                <li><img src="images/logo.svg" /></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tests">Tests</Link></li>
                <li><Link to="/audience">Audience</Link></li>
                <li><Link to="/analytics">Analytics</Link></li>
            </ul>
        </div>
    }
}