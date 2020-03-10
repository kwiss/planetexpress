import Head from 'next/head';
import * as React from 'react';
import { Box } from 'theme-ui';

import Signup from '../components/signup';

const SignupPage: React.FunctionComponent = () => {
  return (
    <div className="container">
      <Head>
        <title>Sign-up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main">
        <Box mt={60} mx="auto" width={300}>
          <Signup />
        </Box>
      </Box>
      <footer />
    </div>
  );
};

export default SignupPage;
