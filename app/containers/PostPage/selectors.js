/**
 * The Post page state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPostPage = state => state.postPage || initialState;

const makeSelectText = () =>
  createSelector(
    selectPostPage,
    postPageState => postPageState.data.text,
  );

const makeSelectStoring = () =>
  createSelector(
    selectPostPage,
    postPageState => postPageState.storing,
  );

const makeSelectError = () =>
  createSelector(
    selectPostPage,
    postPageState => postPageState.error,
  );

export { selectPostPage, makeSelectText, makeSelectStoring, makeSelectError };
