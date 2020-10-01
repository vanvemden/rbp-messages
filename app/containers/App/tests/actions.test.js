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
} from '../constants';

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

describe('App GET Actions', () => {
  describe('getPosts', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: GET_POSTS,
      };

      expect(getPosts()).toEqual(expectedResult);
    });
  });

  describe('getPostsSuccess', () => {
    it('should return the correct type and the passed Posts', () => {
      const fixture = ['Test'];
      const expectedResult = {
        type: GET_POSTS_SUCCESS,
        posts: fixture,
      };

      expect(getPostsSuccess(fixture)).toEqual(expectedResult);
    });
  });

  describe('getPostsError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: GET_POSTS_ERROR,
        error: fixture,
      };

      expect(getPostsError(fixture)).toEqual(expectedResult);
    });
  });
});

describe('App POST Actions', () => {
  describe('postPost', () => {
    it('should return the correct type', () => {
      const fixture = { text: 'Hello World!' };
      const expectedResult = {
        type: POST_POST,
        post: fixture,
      };

      expect(postPost(fixture)).toEqual(expectedResult);
    });
  });

  describe('postPostSuccess', () => {
    it('should return the correct type and the passed Post', () => {
      const fixture = { id: 1, text: 'Hello World!' };
      const expectedResult = {
        type: POST_POST_SUCCESS,
        post: fixture,
      };

      expect(postPostSuccess(fixture)).toEqual(expectedResult);
    });
  });

  describe('postPostError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: POST_POST_ERROR,
        error: fixture,
      };

      expect(postPostError(fixture)).toEqual(expectedResult);
    });
  });
});

describe('App PATCH Actions', () => {
  describe('patchPost', () => {
    it('should return the correct type', () => {
      const fixture = { id: 1, text: 'Hello New World!' };
      const expectedResult = {
        type: PATCH_POST,
        post: fixture,
      };

      expect(patchPost(fixture)).toEqual(expectedResult);
    });
  });

  describe('patchPostSuccess', () => {
    it('should return the correct type and the passed Post', () => {
      const fixture = { id: 1, text: 'Hello New World!' };
      const expectedResult = {
        type: PATCH_POST_SUCCESS,
        post: fixture,
      };

      expect(patchPostSuccess(fixture)).toEqual(expectedResult);
    });
  });

  describe('patchPostError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: PATCH_POST_ERROR,
        error: fixture,
      };

      expect(patchPostError(fixture)).toEqual(expectedResult);
    });
  });
});

describe('App DELETE Actions', () => {
  describe('deletePost', () => {
    it('should return the correct type', () => {
      const fixture = 1;
      const expectedResult = {
        type: DELETE_POST,
        id: fixture,
      };

      expect(deletePost(fixture)).toEqual(expectedResult);
    });
  });

  describe('deletePostSuccess', () => {
    it('should return the correct type and the passed Post', () => {
      const fixture = 1;
      const expectedResult = {
        type: DELETE_POST_SUCCESS,
        id: fixture,
      };

      expect(deletePostSuccess(fixture)).toEqual(expectedResult);
    });
  });

  describe('deletePostError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: DELETE_POST_ERROR,
        error: fixture,
      };

      expect(deletePostError(fixture)).toEqual(expectedResult);
    });
  });
});
