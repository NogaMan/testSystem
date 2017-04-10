import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';


import RootComponent from './components/RootComponent.jsx';
import Home from './components/Home.jsx';
import AllTestsList from './components/AllTestsList.jsx';
import NotFoundComponent from './components/NotFoundComponent.jsx';
import TestDetails from './components/TestDetails.jsx';
import AddTestPageContainer from './components/AddTestPage/AddTestPageContainer.jsx';

require('../design/app.scss');

let layout = <Router history={browserHistory}>
  <Route path="/" component={RootComponent}>
    <Route path="/home" component={Home} />
    <Route path="/tests" component={AllTestsList} />
    <Route path="/tests/add" component={AddTestPageContainer} />
    <Route path="/tests/:id" component={TestDetails} />
    <Route path="*" component={NotFoundComponent} />
  </Route>
</Router>;

const app = document.getElementById("app");

ReactDOM.render(<Provider store={store}>
  {layout}
</Provider>, app);