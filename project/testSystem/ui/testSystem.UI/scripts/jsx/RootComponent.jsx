import React from 'react';
import ReactDOM from 'react-dom';

import { Grid, Row, Col } from 'react-bootstrap';

import Navigation from './Navigation.jsx';


export default class RootComponent extends React.Component {
    render() {
        return <div className="main">
            <Navigation />
            <Grid fluid>
                {this.props.children}
            </Grid>
        </div>
    }
}