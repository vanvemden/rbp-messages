import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import MessageListItem from 'containers/MessageListItem';

function MessagesList({ loading, storing, error, messages }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (messages !== false) {
    return <List items={messages} component={MessageListItem} />;
  }

  return null;
}

MessagesList.propTypes = {
  loading: PropTypes.bool,
  storing: PropTypes.bool,
  error: PropTypes.any,
  messages: PropTypes.any,
};

export default MessagesList;
