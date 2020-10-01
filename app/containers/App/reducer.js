/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
  POST_MESSAGE,
  POST_MESSAGE_SUCCESS,
  POST_MESSAGE_ERROR,
  PATCH_MESSAGE,
  PATCH_MESSAGE_SUCCESS,
  PATCH_MESSAGE_ERROR,
  DELETE_MESSAGE,
  DELETE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  storing: false,
  error: false,
  messages: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_MESSAGES:
        draft.loading = true;
        draft.error = false;
        draft.messages = false;
        break;

      case GET_MESSAGES_SUCCESS:
        draft.messages = action.messages;
        draft.loading = false;
        break;

      case GET_MESSAGES_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case POST_MESSAGE:
        draft.storing = true;
        draft.error = false;
        break;

      case POST_MESSAGE_SUCCESS:
        draft.messages.push(action.message);
        draft.storing = false;
        break;

      case POST_MESSAGE_ERROR:
        draft.error = action.error;
        draft.storing = false;
        break;

      case PATCH_MESSAGE:
        draft.storing = true;
        draft.error = false;
        break;

      case PATCH_MESSAGE_SUCCESS:
        draft.messages.map(msg =>
          msg.id === action.message.id ? action.message : msg,
        );
        draft.storing = false;
        break;

      case PATCH_MESSAGE_ERROR:
        draft.error = action.error;
        draft.storing = false;
        break;

      case DELETE_MESSAGE:
        draft.storing = true;
        draft.error = false;
        break;

      case DELETE_MESSAGE_SUCCESS:
        draft.messages.filter(msg => msg.id !== action.id);
        draft.storing = false;
        break;

      case DELETE_MESSAGE_ERROR:
        draft.error = action.error;
        draft.storing = false;
        break;
    }
  });

export default appReducer;
