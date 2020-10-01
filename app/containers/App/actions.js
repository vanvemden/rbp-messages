/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

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

/**
 * Get the posts, this action starts the request saga. Saga will dispatch:
 * - on success, getPostsSuccess(posts)
 * - on error, getPostsError(error)
 */
export function getPosts() {
  return {
    type: GET_POSTS,
  };
}

export function getPostsSuccess(posts) {
  return {
    type: GET_POSTS_SUCCESS,
    posts,
  };
}

export function getPostsError(error) {
  return {
    type: GET_POSTS_ERROR,
    error,
  };
}

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

/**
 * Patch a post, this action starts the request saga. Saga will dispatch:
 * - on success, patchPostSuccess(post)
 * - on error, patchPostError(error)
 */
export function patchPost(post) {
  return {
    type: PATCH_POST,
    post,
  };
}

export function patchPostSuccess(post) {
  return {
    type: PATCH_POST_SUCCESS,
    post,
  };
}

export function patchPostError(error) {
  return {
    type: PATCH_POST_ERROR,
    error,
  };
}

/**
 * Delete a post, this action starts the request saga. Saga will dispatch:
 * - on success, deletePostSuccess(id)
 * - on error, deletePostError(error)
 */
export function deletePost(id) {
  return {
    type: DELETE_POST,
    id,
  };
}

export function deletePostSuccess(id) {
  return {
    type: DELETE_POST_SUCCESS,
    id,
  };
}

export function deletePostError(error) {
  return {
    type: DELETE_POST_ERROR,
    error,
  };
}
