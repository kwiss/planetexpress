import Head from 'next/head';
import * as React from 'react';

import {LayoutApp} from '../components/layouts';
import { withAuthSync } from '../hocs/with-auth-sync';

const App: React.FunctionComponent<void> = () => {
  return (
    <LayoutApp>
      <Head>
        <title>Create Next App - dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">app content</div>
    </LayoutApp>
  );
};

export default withAuthSync(App);
