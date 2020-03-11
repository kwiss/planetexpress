import Head from 'next/head';
import * as React from 'react';

import { withAuthSync } from '../hocs/with-auth-sync';

const App: React.FunctionComponent<void> = () => {
  return <div className="container">need logout menu</div>;
};

export default withAuthSync(App);
