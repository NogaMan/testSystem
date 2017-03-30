import React from 'react';
import { Row, Col, Glyphicon } from 'react-bootstrap';

export default class GroupPerformanceBlock extends React.Component {
    render() {
        const rate = this.props.rate;
        let stars = [1, 2, 3, 4, 5].map(function (i) {
            return rate > i ? <Glyphicon key={i} glyph="star" />
                : rate > (i - .5) ? <Glyphicon key={i} glyph="star half" />
                    : <Glyphicon key={i} glyph="star-empty" />;
        });
        return <Row>
            <Col className="block" xs={11}>
                <h3>{this.props.name}</h3>
                <div className="out-of">out of {this.props.testCount} tests</div>
                <div className="rate">
                    <div className="stars">
                        {stars}
                    </div>
                    <div className="p">{rate}/5.00</div>
                </div>
            </Col>
        </Row>
    }
}