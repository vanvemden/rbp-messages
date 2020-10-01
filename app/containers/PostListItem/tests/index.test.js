/**
 * Test the repo list item
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import { PostListItem } from '../index';

const renderComponent = (props = {}) =>
  render(
    <IntlProvider locale="en">
      <PostListItem {...props} />
    </IntlProvider>,
  );

describe('<PostListItem />', () => {
  const item = { id: 1, text: 'Hello World!' };

  it('should render a ListItem', () => {
    const { container } = renderComponent({ item });
    expect(container.firstChild).toMatchSnapshot();
  });
});
