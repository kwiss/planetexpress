import Head from 'next/head';
import * as React from 'react';
import { Flex } from 'theme-ui';

import Signup from '../components/auth/signup';
import {LayoutDefault} from '../components/layouts';
import { withAuthSync } from '../hocs/with-auth-sync';
import {AuthBox} from '../ui/AuthBox';

const SignupPage: React.FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Sign-up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutDefault>
        <Flex sx={{
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh'
        }}>
          <AuthBox sx={{mx:' auto', width:'450px'}} title='Signup'>
            <Signup />
          </AuthBox>
        </Flex>
      </LayoutDefault>
    </>
  );
};

export default withAuthSync(SignupPage);
