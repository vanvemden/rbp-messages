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
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_ERROR,
  POST_POST,
  POST_POST_SUCCESS,
  POST_POST_ERROR,
  PATCH_POST,
  PATCH_POST_SUCCESS,
  PATCH_POST_ERROR,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  storing: false,
  error: false,
  posts: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_POSTS:
        draft.loading = true;
        draft.error = false;
        draft.posts = false;
        break;

      case GET_POSTS_SUCCESS:
        draft.posts = action.posts;
        draft.loading = false;
        break;

      case GET_POSTS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case POST_POST:
        draft.storing = true;
        draft.error = false;
        break;

      case POST_POST_SUCCESS:
        draft.posts.push(action.post);
        draft.storing = false;
        break;

      case POST_POST_ERROR:
        draft.error = action.error;
        draft.storing = false;
        break;

      case PATCH_POST:
        draft.storing = true;
        draft.error = false;
        break;

      case PATCH_POST_SUCCESS:
        draft.posts.map(post =>
          post.id === action.post.id ? action.post : post,
        );
        draft.storing = false;
        break;

      case PATCH_POST_ERROR:
        draft.error = action.error;
        draft.storing = false;
        break;

      case DELETE_POST:
        draft.storing = true;
        draft.error = false;
        break;

      case DELETE_POST_SUCCESS:
        draft.posts.filter(post => post.id !== action.id);
        draft.storing = false;
        break;

      case DELETE_POST_ERROR:
        draft.error = action.error;
        draft.storing = false;
        break;
    }
  });

export default appReducer;
