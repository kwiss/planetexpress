import * as React from 'react';
import { Box } from 'theme-ui';

import Signin from '../components/signin';
import { withAuthSync } from '../hocs/with-auth-sync';

const Login: React.FunctionComponent = () => {
  return (
    <Box mx="auto" width={300}>
      <Signin />
    </Box>
  );
};

export default withAuthSync(Login);
