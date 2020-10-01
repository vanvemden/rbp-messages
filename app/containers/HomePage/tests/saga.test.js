/**
 * Tests for HomePage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { GET_POSTS } from 'containers/App/constants';
import { getPostsSuccess, getPostsError } from 'containers/App/actions';

import apiGetPosts, { requestPosts } from '../saga';

const username = 'mxstbr';

/* eslint-disable redux-saga/yield-effects */
describe('requestPosts Saga', () => {
  let requestPostsGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    requestPostsGenerator = requestPosts();

    const selectDescriptor = requestPostsGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = requestPostsGenerator.next(username).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  // TODO
  xit('should dispatch the getPostsSuccess action if it requests the data successfully', () => {
    const response = [
      {
        name: 'First repo',
      },
      {
        name: 'Second repo',
      },
    ];
    const putDescriptor = requestPostsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(getPostsSuccess(response, username)));
  });

  // TODO
  xit('should call the getPostsError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = requestPostsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(getPostsError(response)));
  });
});

describe('apiGetPostsSaga Saga', () => {
  const apiGetPostsSaga = apiGetPosts();

  it('should start task to watch for GET_POSTS action', () => {
    const takeLatestDescriptor = apiGetPostsSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(GET_POSTS, requestPosts));
  });
});
