import React from 'react';
import { Glyphicon, Modal } from 'react-bootstrap';

import API from '../../../api.js';

export default class AllTestsTableControls extends React.Component {
    render() {
        return <div className="controls">
            <Glyphicon glyph="edit" onClick={() => this.props.onEditTest(this.props.id)} />
            <Glyphicon glyph="remove" onClick={(event) => this.props.onDeleteTest(this.props.id, event)} />
        </div>
    }
}


