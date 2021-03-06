import {
  selectGlobal,
  makeSelectLoading,
  makeSelectStoring,
  makeSelectError,
  makeSelectPosts,
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

describe('makeSelectPosts', () => {
  const messagesSelector = makeSelectPosts();
  it('should select the messages', () => {
    const posts = [];
    const mockedState = {
      global: {
        posts,
      },
    };
    expect(messagesSelector(mockedState)).toEqual(posts);
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
