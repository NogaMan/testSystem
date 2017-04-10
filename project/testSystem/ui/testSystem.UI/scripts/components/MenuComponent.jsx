import React from 'react';
import { Router, Route, Link } from 'react-router';

export default class MenuComponent extends React.Component {
    render() {
        return <div className="menu">
            <img src="/design/images/logo.svg" />
            <ul>
                <li><Link activeClassName="active" to="/home">Home</Link></li>
                <li><Link activeClassName="active" to="/tests">Tests</Link></li>
                <li><Link activeClassName="active" to="/audience">Audience</Link></li>
                <li><Link activeClassName="active" to="/analytics">Analytics</Link></li>
            </ul>
        </div>
    }
}