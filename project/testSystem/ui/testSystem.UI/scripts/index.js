﻿import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';


import RootComponent from './components/RootComponent.jsx';
import Home from './components/Home.jsx';
import AllTestsList from './components/TestsPage/AllTestsList/AllTestsList.jsx';
import NotFoundComponent from './components/NotFoundComponent.jsx';
import AddTestPageContainer from './components/TestsPage/AddTestPage/AddTestPageContainer.jsx';
import ExamPageContainer from './components/ExamPage/ExamPageContainer.jsx';
import AudiencesPageContainer from './components/AudiencesPage/AudiencesPageContainer.jsx';
import TestDetailsContainer from './components/TestsPage/TestDetails/TestDetailsContainer.jsx';


require('../design/app.scss');

let layout = <Router history={browserHistory}>
  <Route path="/exam" component={ExamPageContainer} />
  <Route path="/" component={RootComponent}>
    <Route path="/home" component={Home} />
    <Route path="/tests" component={AllTestsList} />
    <Route path="/tests/add" component={AddTestPageContainer} />
    <Route path="/audience" component={AudiencesPageContainer} />
    {<Route path="/tests/:id" component={TestDetailsContainer} /> }
    <Route path="*" component={NotFoundComponent} />
  </Route>
</Router>;

const app = document.getElementById("app");

ReactDOM.render(<Provider store={store}>
  {layout}
</Provider>, app);