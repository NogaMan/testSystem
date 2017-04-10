import React from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button, Alert } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import Api from '../api.js';
import { ERROR_CONSTANTS as ApiError } from '../constants.js';

export default class ModalLogIn extends React.Component {
    constructor() {
        super();
        this.state = {
            login: '',
            password: '',
            alertVisible: false,
            busy: false
        };
        this.api = new Api();
    }

    getLoginValidationState() {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return this.state.login.length === 0 ? null
            : re.test(this.state.login) ? 'success' : 'error';
    }

    logIn() {
        let { login, password } = this.state;
        this.setState({ busy: true });
        this.api.logIn(login, password)
            .then((json) => {
                this.onSuccessfulLogin(json.user)
            })
            .catch((error) => {
                if (error.message === ApiError.WRONG_LOGIN) {
                    this.setState({ alertVisible: true, busy: false });
                }
            });
    }

    onSuccessfulLogin(user) {
        this.setState({ busy: false });
        this.props.onSuccessfulLogin(user);
    }

    render() {
        let alert;
        if (this.state.alertVisible) {
            alert = <Alert bsStyle="danger" onDismiss={() => { this.setState({ alertVisible: false }) }}>
                <p>Login/password pair is not found</p>
            </Alert>
        }
        return (
            <Row>
                <Col xs={6} xsOffset={3}>
                    {alert}
                    <form>
                        <FormGroup controlId="login" validationState={this.getLoginValidationState()}>
                            <ControlLabel>Login</ControlLabel>
                            <FormControl
                                type="email"
                                value={this.state.login}
                                placeholder="Enter your E-Mail"
                                onChange={(e) => this.setState({ login: e.target.value })} />
                        </FormGroup>
                        <FormGroup controlId="password">
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                type="password"
                                value={this.state.password}
                                placeholder="Enter your password"
                                onChange={(e) => this.setState({ password: e.target.value })} />
                        </FormGroup>
                        <Button type="button" onClick={this.logIn.bind(this)}>{this.state.busy ? <FontAwesome name="refresh" spin /> : "Log In"}</Button>
                    </form>
                </Col>
            </Row>
        );
    }
}