import jwtDecode from 'jwt-decode';
import App from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'theme-ui';

import withApolloClient from '../hocs/with-apollo-client';
import theme from '../theme/theme';
import { formatUserFromToken } from '../util';

interface ComponentProps {
  apolloClient?: any;
}

class MyApp extends App<ComponentProps> {
  static async getInitialProps(appContext) {
    const { Component, ctx } = appContext;

    let pageProps = {};

    try {
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }
    } catch (e) {
      // throw e; // you can also skip re-throwing and set property on pageProps
    }

    return {
      pageProps,
    };
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;
    const { token } = pageProps;

    const currentUser = token ? jwtDecode(token) : null;
    const data = { currentUser: formatUserFromToken(currentUser) };

    apolloClient.cache.writeData({ data });

    return (
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(MyApp);
