import Api from '../api.js';
import { cloneAudiences } from './helpers.js';

var defaultState = {
  audiences: null,
  justCreated: false,
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'INIT_AUDIENCES': {
      const audiences = cloneAudiences(action.payload.audiences);
      return Object.assign({}, state, { audiences });
    }
    case 'ADD_AUDIENCE': {
      const audience = action.payload.audience;
      const audiences = cloneAudiences(state.audiences);
      audiences[audience.id] = audience;
      return Object.assign({}, state, { audiences });
    }
    case 'ADD_TEST_TAKER': {
      const { audienceId, testTaker } = action.payload;
      let audiences = cloneAudiences(state.audiences);
      const audience = audiences[audienceId];
      audience.testTakers[testTaker.id] = testTaker;
      return Object.assign({}, state, { audiences });
    }
    case 'DELETE_AUDIENCE': {
      const { audienceId } = action.payload;
      let audiences = cloneAudiences(state.audiences);
      delete audiences[audienceId];
      return Object.assign({}, state, { audiences });
    }
    case 'DELETE_TEST_TAKER': {
      const { audienceId, testTakerId } = action.payload;
      let audiences = cloneAudiences(state.audiences);
      const audience = audiences[audienceId];
      delete audience.testTakers[testTakerId];
      return Object.assign({}, state, { audiences });
    }
    default: {
      return state;
    }
  }
}