/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const GET_MESSAGES = 'rbp-messages/App/GET_MESSAGES';
export const GET_MESSAGES_SUCCESS = 'rbp-messages/App/GET_MESSAGES_SUCCESS';
export const GET_MESSAGES_ERROR = 'rbp-messages/App/GET_MESSAGES_ERROR';

export const POST_MESSAGE = 'rbp-messages/App/POST_MESSAGE';
export const POST_MESSAGE_SUCCESS = 'rbp-messages/App/POST_MESSAGE_SUCCESS';
export const POST_MESSAGE_ERROR = 'rbp-messages/App/POST_MESSAGE_ERROR';

export const PATCH_MESSAGE = 'rbp-messages/App/PATCH_MESSAGE';
export const PATCH_MESSAGE_SUCCESS = 'rbp-messages/App/PATCH_MESSAGE_SUCCESS';
export const PATCH_MESSAGE_ERROR = 'rbp-messages/App/PATCH_MESSAGE_ERROR';

export const DELETE_MESSAGE = 'rbp-messages/App/DELETE_MESSAGE';
export const DELETE_MESSAGE_SUCCESS = 'rbp-messages/App/DELETE_MESSAGE_SUCCESS';
export const DELETE_MESSAGE_ERROR = 'rbp-messages/App/DELETE_MESSAGE_ERROR';
