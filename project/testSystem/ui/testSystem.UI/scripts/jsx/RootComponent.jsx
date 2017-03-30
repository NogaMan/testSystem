import React from 'react';
import ReactDOM from 'react-dom';

import { Grid, Row, Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import Navigation from './Navigation.jsx';
import ModalLogIn from './ModalLogIn.jsx';

import Api from '../api.js';
import { ERROR_CONSTANTS as ApiError } from '../constants.js';


export default class RootComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            login: undefined,
            busy: true,
        }
        this.api = new Api();
        this.checkLogOn();
    }

    onLogin(login) {
        this.setState({ login, busy: false });
    }

    checkLogOn() {
        this.api.checkLogOn()
            .then((json) =>
                this.onLogin(json.user)
            )
            .catch((error) => {
                if (error.message === ApiError.NOT_CURRENTLY_LOGGED_IN) {
                    this.setState({ login: undefined, busy: false });
                }
            });
    }

    logOut() {
        this.api.logOut()
            .then(() => this.setState({ login: undefined }));
    }

    render() {
        let layout;
        if (this.state.busy) {
            layout = <div className="overlay">
                <FontAwesome name="refresh" size="5x" spin />
            </div>
        } else {
            if (!this.state.login) {
                layout = <ModalLogIn onSuccessfulLogin={this.onLogin.bind(this)} />
            } else {
                layout = this.props.children;
            }
        }
        return <div className="main">
            <Navigation user={this.state.login} logOut={this.logOut.bind(this)}/>
            <Grid fluid>
                {layout}
            </Grid>
        </div>
    }
}