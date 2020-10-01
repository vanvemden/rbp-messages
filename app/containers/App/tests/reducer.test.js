import produce from 'immer';

import appReducer from '../reducer';
import {
  getPosts,
  getPostsSuccess,
  getPostsError,
  postPost,
  postPostSuccess,
  postPostError,
  patchPost,
  patchPostSuccess,
  patchPostError,
  deletePost,
  deletePostSuccess,
  deletePostError,
} from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      saving: false,
      error: false,
      posts: false,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the getPosts action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
      draft.posts = false;
    });

    expect(appReducer(state, getPosts())).toEqual(expectedResult);
  });

  it('should handle the getPostsSuccess action correctly', () => {
    const fixture = [
      {
        id: 1,
        text: 'Hello World!',
      },
    ];
    const expectedResult = produce(state, draft => {
      draft.posts = fixture;
      draft.loading = false;
    });

    expect(appReducer(state, getPostsSuccess(fixture))).toEqual(expectedResult);
  });

  it('should handle the getPostsError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.loading = false;
    });

    expect(appReducer(state, getPostsError(fixture))).toEqual(expectedResult);
  });

  it('should handle the postPost action correctly', () => {
    const fixture = [
      {
        text: 'Hello World!',
      },
    ];
    const expectedResult = produce(state, draft => {
      draft.saving = true;
      draft.error = false;
    });

    expect(appReducer(state, postPost(fixture))).toEqual(expectedResult);
  });

  it('should handle the postPostSuccess action correctly', () => {
    const fixture = [
      {
        id: 1,
        text: 'Hello World!',
      },
    ];
    const expectedResult = produce(state, draft => {
      draft.posts = fixture;
      draft.saving = false;
    });

    expect(appReducer(state, postPostSuccess(fixture))).toEqual(expectedResult);
  });

  it('should handle the postPostError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.saving = false;
    });

    expect(appReducer(state, postPostError(fixture))).toEqual(expectedResult);
  });

  it('should handle the patchPost action correctly', () => {
    const fixture = [{ id: 1, text: 'Hello New World!' }];
    const expectedResult = produce(state, draft => {
      draft.saving = true;
      draft.error = false;
    });

    expect(appReducer(state, patchPost(fixture))).toEqual(expectedResult);
  });

  it('should handle the patchPostSuccess action correctly', () => {
    const fixture = [
      {
        id: 1,
        text: 'Hello New World!',
      },
    ];
    const expectedResult = produce(state, draft => {
      draft.posts = fixture;
      draft.saving = false;
    });

    expect(appReducer(state, patchPostSuccess(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the patchPostError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.saving = false;
    });

    expect(appReducer(state, patchPostError(fixture))).toEqual(expectedResult);
  });

  it('should handle the deletePost action correctly', () => {
    const fixture = 1;
    const expectedResult = produce(state, draft => {
      draft.saving = true;
      draft.error = false;
    });

    expect(appReducer(state, deletePost(fixture))).toEqual(expectedResult);
  });

  it('should handle the deletePostSuccess action correctly', () => {
    const fixture = 1;
    const expectedResult = produce(state, draft => {
      draft.posts = false;
      draft.saving = false;
    });

    expect(appReducer(state, deletePostSuccess(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the deletePostError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.saving = false;
    });

    expect(appReducer(state, deletePostError(fixture))).toEqual(expectedResult);
  });
});
