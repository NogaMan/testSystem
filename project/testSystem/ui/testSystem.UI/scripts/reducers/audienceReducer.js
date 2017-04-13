import Api from '../api.js';
import { cloneAudiences } from './helpers.js';

var defaultState = {
  audiences: { },
  lastAudienceId: 0,
  justCreated: false
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'INIT_AUDIENCES': {
      const audiences = cloneAudiences(action.payload.audiences);
      const lastAudienceId = audiences[audiences.length - 1].id;
      return Object.assign({}, state, { audiences, lastAudienceId });
    }
    case 'ADD_AUDIENCE': {
      const audience = action.payload.audience;
      let { lastAudienceId, audiences } = state;
      const newId = lastAudienceId++;
      audience.id = newId;
      audiences[newId] = audience;
      audiences = cloneAudiences(audiences);
      return Object.assign({}, state, { audiences, lastAudienceId });
    }
    default: {
      return state;
    }
  }
}