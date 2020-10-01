/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_POSTS } from 'containers/App/constants';
import { getPostsSuccess, getPostsError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* requestPosts() {
  // Select username from store
  // const username = yield select(makeSelectUsername());
  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  const fixed = {
    posts: [{ id: 1, text: 'Hello World!' }, { id: 2, text: 'How are you?' }],
  };
  try {
    // Call our request helper (see 'utils/request')
    // const posts = yield call(request, requestURL);
    yield put(getPostsSuccess(fixed.posts));
  } catch (err) {
    yield put(getPostsError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_POSTS, requestPosts);
}
