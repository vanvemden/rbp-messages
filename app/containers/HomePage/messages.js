/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'rbp-messages.containers.HomePage';

export default defineMessages({
  startProjectHeader: {
    id: `${scope}.start_project.header`,
    defaultMessage: 'site name',
  },
  startProjectMessage: {
    id: `${scope}.start_project.message`,
    defaultMessage: 'catchy slogan goes here',
  },
  messagesHeader: {
    id: `${scope}.messages.header`,
    defaultMessage: 'Posts',
  },
});
