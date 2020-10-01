import produce from 'immer';

import appReducer from '../reducer';
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

/* eslint-disable default-case, no-param-reassign */
describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      loading: false,
      saving: false,
      error: false,
      messages: false,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the getMessages action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
      draft.messages = false;
    });

    expect(appReducer(state, getMessages())).toEqual(expectedResult);
  });

  it('should handle the getMessagesSuccess action correctly', () => {
    const fixture = [
      {
        id: 1,
        text: 'Hello World!',
      },
    ];
    const expectedResult = produce(state, draft => {
      draft.messages = fixture;
      draft.loading = false;
    });

    expect(appReducer(state, getMessagesSuccess(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the getMessagesError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.loading = false;
    });

    expect(appReducer(state, getMessagesError(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the postMessage action correctly', () => {
    const fixture = [
      {
        text: 'Hello World!',
      },
    ];
    const expectedResult = produce(state, draft => {
      draft.saving = true;
      draft.error = false;
    });

    expect(appReducer(state, postMessage(fixture))).toEqual(expectedResult);
  });

  it('should handle the postMessageSuccess action correctly', () => {
    const fixture = [
      {
        id: 1,
        text: 'Hello World!',
      },
    ];
    const expectedResult = produce(state, draft => {
      draft.messages = fixture;
      draft.saving = false;
    });

    expect(appReducer(state, postMessageSuccess(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the postMessageError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.saving = false;
    });

    expect(appReducer(state, postMessageError(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the patchMessage action correctly', () => {
    const fixture = [{ id: 1, text: 'Hello New World!' }];
    const expectedResult = produce(state, draft => {
      draft.saving = true;
      draft.error = false;
    });

    expect(appReducer(state, patchMessage(fixture))).toEqual(expectedResult);
  });

  it('should handle the patchMessageSuccess action correctly', () => {
    const fixture = [
      {
        id: 1,
        text: 'Hello New World!',
      },
    ];
    const expectedResult = produce(state, draft => {
      draft.messages = fixture;
      draft.saving = false;
    });

    expect(appReducer(state, patchMessageSuccess(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the patchMessageError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.saving = false;
    });

    expect(appReducer(state, patchMessageError(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the deleteMessage action correctly', () => {
    const fixture = 1;
    const expectedResult = produce(state, draft => {
      draft.saving = true;
      draft.error = false;
    });

    expect(appReducer(state, deleteMessage(fixture))).toEqual(expectedResult);
  });

  it('should handle the deleteMessageSuccess action correctly', () => {
    const fixture = 1;
    const expectedResult = produce(state, draft => {
      draft.messages = false;
      draft.saving = false;
    });

    expect(appReducer(state, deleteMessageSuccess(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the deleteMessageError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = produce(state, draft => {
      draft.error = fixture;
      draft.saving = false;
    });

    expect(appReducer(state, deleteMessageError(fixture))).toEqual(
      expectedResult,
    );
  });
});
