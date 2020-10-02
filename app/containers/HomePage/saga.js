import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_POSTS } from 'containers/App/constants';
import { getPostsSuccess, getPostsError } from 'containers/App/actions';
import request from 'utils/request';
import { API_ROOT_URL } from '../../config';

/**
 * Github repos request/response handler
 */
export function* getPostsApiRequest() {
  // Select posts from database
  const requestURL = `${API_ROOT_URL}/posts`;
  try {
    // Call our request helper (see 'utils/request')
    const result = yield call(request, requestURL);
    yield put(getPostsSuccess(result.posts));
  } catch (err) {
    yield put(getPostsError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* getPostsWatcher() {
  // Watches for GET_POSTS actions and calls getPostsApiRequest.
  yield takeLatest(GET_POSTS, getPostsApiRequest);
}
