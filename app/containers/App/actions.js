/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

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
} from './constants';

/**
 * Get the messages, this action starts the request saga. Saga will dispatch:
 * - on success, getMessagesSuccess(messages)
 * - on error, getMessagesError(error)
 */
export function getMessages() {
  return {
    type: GET_MESSAGES,
  };
}

export function getMessagesSuccess(messages) {
  return {
    type: GET_MESSAGES_SUCCESS,
    messages,
  };
}

export function getMessagesError(error) {
  return {
    type: GET_MESSAGES_ERROR,
    error,
  };
}

/**
 * Post a message, this action starts the request saga. Saga will dispatch:
 * - on success, postMessageSuccess(message)
 * - on error, postMessageError(error)
 */
export function postMessage() {
  return {
    type: POST_MESSAGE,
  };
}

export function postMessageSuccess(message) {
  return {
    type: POST_MESSAGE_SUCCESS,
    message,
  };
}

export function postMessageError(error) {
  return {
    type: POST_MESSAGE_ERROR,
    error,
  };
}

/**
 * Patch a message, this action starts the request saga. Saga will dispatch:
 * - on success, patchMessageSuccess(message)
 * - on error, patchMessageError(error)
 */
export function patchMessage() {
  return {
    type: PATCH_MESSAGE,
  };
}

export function patchMessageSuccess(message) {
  return {
    type: PATCH_MESSAGE_SUCCESS,
    message,
  };
}

export function patchMessageError(error) {
  return {
    type: PATCH_MESSAGE_ERROR,
    error,
  };
}

/**
 * Delete a message, this action starts the request saga. Saga will dispatch:
 * - on success, deleteMessageSuccess(id)
 * - on error, deleteMessageError(error)
 */
export function deleteMessage() {
  return {
    type: DELETE_MESSAGE,
  };
}

export function deleteMessageSuccess(id) {
  return {
    type: DELETE_MESSAGE_SUCCESS,
    id,
  };
}

export function deleteMessageError(error) {
  return {
    type: DELETE_MESSAGE_ERROR,
    error,
  };
}
