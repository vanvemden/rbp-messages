/*
 * Renders the HomePage
 */
import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectMessages,
  makeSelectLoading,
  makeSelectStoring,
  makeSelectError,
} from 'containers/App/selectors';

import { Jumbotron, Container, H2 } from '@bootstrap-styled/v4';
import MessagesList from 'components/MessagesList';
import uiText from './messages';
import { getMessages } from '../App/actions';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({ loading, storing, error, messages, onPageLoad }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onPageLoad();
  }, []);

  const propsMessagesList = {
    loading,
    storing,
    error,
    messages,
  };

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div>
        <Jumbotron>
          <H2>
            <FormattedMessage {...uiText.startProjectHeader} />
          </H2>
          <p>
            <FormattedMessage {...uiText.startProjectMessage} />
          </p>
        </Jumbotron>
        <Container>
          <H2>
            <FormattedMessage {...uiText.trymeHeader} />
          </H2>
          <MessagesList {...propsMessagesList} />
        </Container>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  storing: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  messages: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onPageLoad: PropTypes.func,
};

// object to connect Redux state to react component props
const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  storing: makeSelectStoring(),
  error: makeSelectError(),
  messages: makeSelectMessages(),
});

// object to connect Redux actions to React component props
export function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: () => dispatch(getMessages()),
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
