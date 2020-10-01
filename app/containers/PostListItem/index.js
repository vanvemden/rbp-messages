/**
 * PostListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';

export function PostListItem(props) {
  const { item } = props;

  // Render the content into a list item
  return <ListItem key={`message-list-item-${item.id}`} item={item.text} />;
}

PostListItem.propTypes = {
  item: PropTypes.object,
};

export default PostListItem;
