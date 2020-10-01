/*
 * Renders the HomePage
 */
import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectPosts,
  makeSelectLoading,
  makeSelectStoring,
  makeSelectError,
} from 'containers/App/selectors';

import { Container, H2 } from '@bootstrap-styled/v4';
import CenteredJumbotron from 'components/CenteredJumbotron';
import PostsList from 'components/PostsList';
import messages from './messages';
import { getPosts } from '../App/actions';
import saga from './saga';

const key = 'home';

export function HomePage({ loading, storing, error, posts, onPageLoad }) {
  useInjectSaga({ key, saga });

  useEffect(() => {
    onPageLoad();
  }, []);

  const propsPostsList = {
    loading,
    storing,
    error,
    posts,
  };

  return (
    <article>
      <Helmet>
        <title>site name | catchy slogan</title>
        <meta name="description" content="Short website description." />
      </Helmet>
      <div>
        <CenteredJumbotron>
          <H2>
            <FormattedHTMLMessage {...messages.startProjectHeader} />
          </H2>
          <p>
            <FormattedMessage {...messages.startProjectMessage} />
          </p>
        </CenteredJumbotron>
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

HomePage.propTypes = {
  loading: PropTypes.bool,
  storing: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  posts: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onPageLoad: PropTypes.func,
};

// object to connect Redux state to react component props
const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  storing: makeSelectStoring(),
  error: makeSelectError(),
  posts: makeSelectPosts(),
});

// object to connect Redux actions to React component props
export function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: () => dispatch(getPosts()),
  };
}
// connect Redux state and actions to React component props
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

// pass multiple Redux store enhancers into the store
// wrap component in memo to only re-render when props change
export default compose(
  withConnect,
  memo,
)(HomePage);
