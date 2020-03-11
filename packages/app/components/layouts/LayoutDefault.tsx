import React from 'react';
import {Box} from 'theme-ui';

const LayoutDefault: React.FunctionComponent = (props) => {
  const {children} = props;
  return (
    <Box>
      {children}
    </Box>
  );
};

export { LayoutDefault };
