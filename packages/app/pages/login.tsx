import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import { Flex } from 'theme-ui';

import Signin from '../components/auth/signin';
import { LayoutDefault } from '../components/layouts';
import { withAuthSync } from '../hocs/with-auth-sync';
import { AuthBox } from '../ui/AuthBox';

const Login: React.FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutDefault>
        <Flex
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
          }}
        >
          <AuthBox sx={{ mx: ' auto', width: '450px' }} title="Login">
            <Signin />
            <Link href="/signup">Sign up</Link>
          </AuthBox>
        </Flex>
      </LayoutDefault>
    </>
  );
};

export default withAuthSync(Login);
