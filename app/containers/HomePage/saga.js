/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { GET_MESSAGES } from 'containers/App/constants';
import { getMessagesSuccess, getMessagesError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* requestMessages() {
  // Select username from store
  // const username = yield select(makeSelectUsername());
  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  const fixed = {
    messages: [
      { id: 1, text: 'Hello World!' },
      { id: 2, text: 'How are you?' },
    ],
  };
  try {
    // Call our request helper (see 'utils/request')
    // const messages = yield call(request, requestURL);
    yield put(getMessagesSuccess(fixed.messages));
  } catch (err) {
    yield put(getMessagesError(err));
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
  yield takeLatest(GET_MESSAGES, requestMessages);
}
