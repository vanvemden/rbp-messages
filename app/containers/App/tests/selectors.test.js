import {
  selectGlobal,
  makeSelectLoading,
  makeSelectStoring,
  makeSelectError,
  makeSelectMessages,
  makeSelectLocation,
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = {};
    const mockedState = {
      global: globalState,
    };
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = {
      global: {
        loading,
      },
    };
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectStoring', () => {
  const storingSelector = makeSelectStoring();
  it('should select the storing', () => {
    const storing = false;
    const mockedState = {
      global: {
        storing,
      },
    };
    expect(storingSelector(mockedState)).toEqual(storing);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = {
      global: {
        error,
      },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectMessages', () => {
  const messagesSelector = makeSelectMessages();
  it('should select the messages', () => {
    const messages = [];
    const mockedState = {
      global: {
        messages,
      },
    };
    expect(messagesSelector(mockedState)).toEqual(messages);
  });
});

describe('makeSelectLocation', () => {
  const locationStateSelector = makeSelectLocation();
  it('should select the location', () => {
    const router = {
      location: { pathname: '/foo' },
    };
    const mockedState = {
      router,
    };
    expect(locationStateSelector(mockedState)).toEqual(router.location);
  });
});
