import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


import RootComponent from './jsx/RootComponent.jsx';
import Home from './jsx/Home.jsx';
import AllTestsList from './jsx/AllTestsList.jsx';
import NotFoundComponent from './jsx/NotFoundComponent.jsx';
import TestDetails from './jsx/TestDetails.jsx';

require('../design/app.scss');

let layout = <Router history={browserHistory}>
    <Route path="/" component={RootComponent}>
        <Route path="/home" component={Home} />
        <Route path="/tests" component={AllTestsList} />
        <Route path="/tests/:id" component={TestDetails} />
        <Route path="*" component={NotFoundComponent} />
    </Route>
</Router>;

ReactDOM.render(layout, document.getElementById("app"));