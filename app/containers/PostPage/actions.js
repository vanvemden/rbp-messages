import { POST_POST, POST_POST_SUCCESS, POST_POST_ERROR } from './constants';

/**
 * Post a post, this action starts the request saga. Saga will dispatch:
 * - on success, postPostSuccess(post)
 * - on error, postPostError(error)
 */
export function postPost(post) {
  return {
    type: POST_POST,
    post,
  };
}

export function postPostSuccess(post) {
  return {
    type: POST_POST_SUCCESS,
    post,
  };
}

export function postPostError(error) {
  return {
    type: POST_POST_ERROR,
    error,
  };
}
