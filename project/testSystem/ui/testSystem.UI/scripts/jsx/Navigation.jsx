import React from 'react';
import MenuComponent from './MenuComponent.jsx';
import { Jumbotron } from 'react-bootstrap';
import { API_URL, API_LOGOUT } from '../constants';

export default class Navigation extends React.Component {
    render() {
        const user = this.props.user;
        let layout;
        if (user) {
            layout = <span className="user-info">
                <span>{this.props.user}</span>
                <a onClick={() => this.props.logOut()} className="logout">logout</a>
            </span>;
        }
        return <Jumbotron className="nav">
            <MenuComponent />
            {layout}
        </Jumbotron>
    }
}