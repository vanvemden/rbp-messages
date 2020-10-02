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

export const GET_POSTS = 'rbp-messages/App/GET_POSTS';
export const GET_POSTS_SUCCESS = 'rbp-messages/App/GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'rbp-messages/App/GET_POSTS_ERROR';

export const PATCH_POST = 'rbp-messages/App/PATCH_POST';
export const PATCH_POST_SUCCESS = 'rbp-messages/App/PATCH_POST_SUCCESS';
export const PATCH_POST_ERROR = 'rbp-messages/App/PATCH_POST_ERROR';

export const DELETE_POST = 'rbp-messages/App/DELETE_POST';
export const DELETE_POST_SUCCESS = 'rbp-messages/App/DELETE_POST_SUCCESS';
export const DELETE_POST_ERROR = 'rbp-messages/App/DELETE_POST_ERROR';
