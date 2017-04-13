import { combineReducers } from 'redux';

import test from './testReducer';
import exam from './examReducer';
import audience from './audienceReducer';
export default combineReducers({ test, exam });