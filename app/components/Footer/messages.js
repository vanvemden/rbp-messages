/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'rbp-messages.components.Footer';

export default defineMessages({
  authorMessage: {
    id: `${scope}.author.message`,
    defaultMessage: `
      Made by {author}.
    `,
  },
});
