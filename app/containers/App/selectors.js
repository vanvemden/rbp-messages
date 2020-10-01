/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectStoring = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.storing,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectMessages = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.messages,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectGlobal,
  makeSelectLoading,
  makeSelectStoring,
  makeSelectError,
  makeSelectMessages,
  makeSelectLocation,
};
