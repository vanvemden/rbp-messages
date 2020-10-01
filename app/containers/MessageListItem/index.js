/**
 * MessageListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';

export function MessageListItem(props) {
  const { item } = props;

  // Render the content into a list item
  return <ListItem key={`message-list-item-${item.id}`} item={item.text} />;
}

MessageListItem.propTypes = {
  item: PropTypes.object,
};

export default MessageListItem;
