import React from 'react';
import {Box, Flex} from 'theme-ui';

const LayoutApp: React.FunctionComponent = (props) => {
  const {children} = props;
  return (
    <Flex
      sx={{
        flexWrap: 'wrap'
      }}>
      <Box
        sx={{
          flexBasis: 256,
          flexGrow: 1,
          p: 3
        }}>
    Sidebar
      </Box>
      <Box
        sx={{
          flexBasis: 0,
          flexGrow: 99999,
          minWidth: 320,
          p: 3
        }}>
        {children}
      </Box>
    </Flex> 
  );
};

export { LayoutApp };
