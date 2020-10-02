import produce from 'immer';
import { POST_POST, POST_POST_SUCCESS, POST_POST_ERROR } from './constants';

// The initial state of the App
export const initialState = {
  text: '',
  success: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const postReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case POST_POST:
        draft.success = false;
        draft.error = false;
        break;

      case POST_POST_SUCCESS:
        draft.posts.push(action.post);
        draft.success = true;
        break;

      case POST_POST_ERROR:
        draft.error = action.error;
        break;
    }
  });

export default postReducer;
