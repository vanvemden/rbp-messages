import React from 'react';
import { IntlProvider } from 'react-intl';
import { render } from 'react-testing-library';

import PostsList from '../index';

describe('<PostsList />', () => {
  it('should render the loading indicator when its loading', () => {
    const { container } = render(<PostsList loading />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render an error if loading failed', () => {
    const { queryByText } = render(
      <IntlProvider locale="en">
        <PostsList loading={false} error={{ message: 'Loading failed!' }} />
      </IntlProvider>,
    );
    expect(queryByText(/Something went wrong/)).not.toBeNull();
  });
});
