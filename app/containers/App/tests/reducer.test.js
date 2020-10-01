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
      storing: false,
      error: false,
      posts: [],
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
      draft.posts = [];
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
      draft.storing = true;
      draft.error = false;
    });

    expect(appReducer(state, postPost(fixture))).toEqual(expectedResult);
  });

  it('should handle the postPostSuccess action correctly', () => {
    const fixture = {
      id: 1,
      text: 'Hello World!',
    };
    const expectedResult = produce(state, draft => {
      draft.posts = [fixture];
      draft.storing = false;
    });

    expect(appReducer(state, postPostSuccess(fixture))).toEqual(expectedResult);
  });

  it('should handle the postPostError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.storing = false;
    });

    expect(appReducer(state, postPostError(fixture))).toEqual(expectedResult);
  });

  it('should handle the patchPost action correctly', () => {
    const postFixture = [{ id: 1, text: 'Hello World!' }];
    appReducer(state, postPost(postFixture));
    const patchFixture = [{ id: 1, text: 'Hello New World!' }];

    const expectedResult = produce(state, draft => {
      draft.storing = true;
      draft.error = false;
    });

    expect(appReducer(state, patchPost(patchFixture))).toEqual(expectedResult);
  });

  it('should handle the patchPostSuccess action correctly', () => {
    // post item and get temporary state
    const postFixture = { id: 1, text: 'Hello World!' };
    const tempState = appReducer(state, postPostSuccess(postFixture));
    // patch item and apply to temporary state
    const patchFixture = { id: 1, text: 'Hello New World!' };
    const expectedResult = produce(state, draft => {
      draft.posts = [patchFixture];
      draft.storing = false;
    });

    expect(appReducer(tempState, patchPostSuccess(patchFixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the patchPostError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.storing = false;
    });

    expect(appReducer(state, patchPostError(fixture))).toEqual(expectedResult);
  });

  it('should handle the deletePost action correctly', () => {
    const fixture = 1;
    const expectedResult = produce(state, draft => {
      draft.storing = true;
      draft.error = false;
    });

    expect(appReducer(state, deletePost(fixture))).toEqual(expectedResult);
  });

  it('should handle the deletePostSuccess action correctly', () => {
    const fixture = 1;
    const expectedResult = produce(state, draft => {
      draft.posts = [];
      draft.storing = false;
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
      draft.storing = false;
    });

    expect(appReducer(state, deletePostError(fixture))).toEqual(expectedResult);
  });
});
