import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { API_ROOT_URL } from '../../config';
import { POST_POST } from './constants';
import { postPostSuccess, postPostError } from './actions';
import { makeSelectText } from './selectors';

export function* postPostApiRequest() {
  const requestURL = `${API_ROOT_URL}/posts`;
  const text = yield select(makeSelectText());
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ text }),
  };

  try {
    // Call request helper function
    const result = yield call(request, requestURL, options);
    yield put(postPostSuccess(result.post));
  } catch (err) {
    yield put(postPostError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* postPostWatcher() {
  // Watches for POST_POST action and calls postPostApiRequest
  yield takeLatest(POST_POST, postPostApiRequest);
}
