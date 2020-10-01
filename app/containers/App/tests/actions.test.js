import {
  GET_MESSAGES,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
  POST_MESSAGE,
  POST_MESSAGE_SUCCESS,
  POST_MESSAGE_ERROR,
  PATCH_MESSAGE,
  PATCH_MESSAGE_SUCCESS,
  PATCH_MESSAGE_ERROR,
  DELETE_MESSAGE,
  DELETE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_ERROR,
} from '../constants';

import {
  getMessages,
  getMessagesSuccess,
  getMessagesError,
  postMessage,
  postMessageSuccess,
  postMessageError,
  patchMessage,
  patchMessageSuccess,
  patchMessageError,
  deleteMessage,
  deleteMessageSuccess,
  deleteMessageError,
} from '../actions';

describe('App GET Actions', () => {
  describe('getMessages', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: GET_MESSAGES,
      };

      expect(getMessages()).toEqual(expectedResult);
    });
  });

  describe('getMessagesSuccess', () => {
    it('should return the correct type and the passed messages', () => {
      const fixture = ['Test'];
      const expectedResult = {
        type: GET_MESSAGES_SUCCESS,
        messages: fixture,
      };

      expect(getMessagesSuccess(fixture)).toEqual(expectedResult);
    });
  });

  describe('getMessagesError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: GET_MESSAGES_ERROR,
        error: fixture,
      };

      expect(getMessagesError(fixture)).toEqual(expectedResult);
    });
  });
});

describe('App POST Actions', () => {
  describe('postMessage', () => {
    it('should return the correct type', () => {
      const fixture = { text: 'Hello World!' };
      const expectedResult = {
        type: POST_MESSAGE,
        message: fixture,
      };

      expect(postMessage(fixture)).toEqual(expectedResult);
    });
  });

  describe('postMessageSuccess', () => {
    it('should return the correct type and the passed message', () => {
      const fixture = { id: 1, text: 'Hello World!' };
      const expectedResult = {
        type: POST_MESSAGE_SUCCESS,
        message: fixture,
      };

      expect(postMessageSuccess(fixture)).toEqual(expectedResult);
    });
  });

  describe('postMessageError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: POST_MESSAGE_ERROR,
        error: fixture,
      };

      expect(postMessageError(fixture)).toEqual(expectedResult);
    });
  });
});

describe('App PATCH Actions', () => {
  describe('patchMessage', () => {
    it('should return the correct type', () => {
      const fixture = { id: 1, text: 'Hello New World!' };
      const expectedResult = {
        type: PATCH_MESSAGE,
        message: fixture,
      };

      expect(patchMessage(fixture)).toEqual(expectedResult);
    });
  });

  describe('patchMessageSuccess', () => {
    it('should return the correct type and the passed message', () => {
      const fixture = { id: 1, text: 'Hello New World!' };
      const expectedResult = {
        type: PATCH_MESSAGE_SUCCESS,
        messages: fixture,
      };

      expect(patchMessageSuccess(fixture)).toEqual(expectedResult);
    });
  });

  describe('patchMessageError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: PATCH_MESSAGE_ERROR,
        error: fixture,
      };

      expect(patchMessageError(fixture)).toEqual(expectedResult);
    });
  });
});

describe('App DELETE Actions', () => {
  describe('deleteMessage', () => {
    it('should return the correct type', () => {
      const fixture = 1;
      const expectedResult = {
        type: DELETE_MESSAGE,
        id: fixture,
      };

      expect(deleteMessage(fixture)).toEqual(expectedResult);
    });
  });

  describe('deleteMessageSuccess', () => {
    it('should return the correct type and the passed message', () => {
      const fixture = 1;
      const expectedResult = {
        type: DELETE_MESSAGE_SUCCESS,
        messages: fixture,
      };

      expect(deleteMessageSuccess(fixture)).toEqual(expectedResult);
    });
  });

  describe('deleteMessageError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: DELETE_MESSAGE_ERROR,
        error: fixture,
      };

      expect(deleteMessageError(fixture)).toEqual(expectedResult);
    });
  });
});
