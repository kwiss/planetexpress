import React, {FunctionComponent} from 'react';
import {Box} from 'theme-ui';

const CySidebar: FunctionComponent = (props) => {
  const {children} = props;
  return (
    <Box
      sx={{
        bg: 'black',
        color: 'white',
        flexBasis: 256,
        flexGrow: 1,
        minHeight: '100vh',
        p: 4
      }}>
      {children}
    </Box>
  );
};

export { CySidebar };

