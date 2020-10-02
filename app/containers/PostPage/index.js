/*
 * Renders the PostPage
 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectText } from './selectors';

import { Container, H2 } from '@bootstrap-styled/v4';
import messages from './messages';
import saga from './saga';

const key = 'home';

export function PostPage({ text, success, error, onChangeText, onSubmitForm }) {
  useInjectSaga({ key, saga });

  return (
    <article>
      <Helmet>
        <title>site name | post import {} from "module";</title>
        <meta name="description" content="Short website description." />
      </Helmet>
      <div>
        <Container>
          <H2>
            <FormattedMessage {...messages.messagesHeader} />
          </H2>
          <PostsList {...propsPostsList} />
        </Container>
      </div>
    </article>
  );
}

PostPage.propTypes = {
  text: PropTypes.string,
  success: PropTypes.bool,
  error: PropTypes.bool,
  onChangeText: PropTypes.func,
  onSubmitForm: PropTypes.func,
};

// object to connect Redux state to react component props
const mapStateToProps = createStructuredSelector({
  text: makeSelectText(),
  success: makeSelectSuccess(),
  error: makeSelectError(),
});

// object to connect Redux actions to React component props
export function mapDispatchToProps(dispatch) {
  return {
    onChangeText: evt => dispatch(changeString(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(postPost());
    },
  };
}
// connect Redux state and actions to React component props
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

// pass multiple Redux store enhancers into the store
// wrap component in memo to only re-render when props change
export default compose(withConnect)(PostPage);
