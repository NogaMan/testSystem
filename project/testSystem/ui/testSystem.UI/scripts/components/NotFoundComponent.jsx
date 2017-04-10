import React from 'react';
import { Col, Row } from 'react-bootstrap';

const NotFoundComponent = () =>
    <Row className="row">
        <Col xs={12}>
            <h3>404 page not found</h3>
            <p>We are sorry but the page you are looking for does not exist.</p>
        </Col>        
    </Row>

export default NotFoundComponent;