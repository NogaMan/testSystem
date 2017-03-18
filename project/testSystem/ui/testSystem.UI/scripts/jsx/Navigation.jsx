import React from 'react';
import MenuComponent from './MenuComponent.jsx';
import { Jumbotron } from 'react-bootstrap';
import { API_URL, API_LOGOUT } from '../constants';

export default class Navigation extends React.Component {
    logOut() {

    }

    render() {
        return <Jumbotron className="nav">
            <MenuComponent />
            <span className="user-info">
                <span>nogaman</span>
                <a onClick={this.logOut} className="logout">logout</a>
            </span>
        </Jumbotron>
    }
}