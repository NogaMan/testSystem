import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from './Navigation.jsx';


export default class RootComponent extends React.Component {
    render() {
        return <div className="main">
            <Navigation />
            <main>
                {this.props.children}
            </main>
        </div>
    }
}