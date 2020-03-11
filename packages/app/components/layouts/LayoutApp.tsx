import React, {FunctionComponent} from 'react';
import {Box, Flex} from 'theme-ui';

import {CySidebar} from '../../ui/Sidebar';
import {Logout} from '../logout';

const LayoutApp: FunctionComponent = (props) => {
  const {children} = props;
  return (
    <Flex
      sx={{
        flexWrap: 'wrap'
      }}>
      <CySidebar>
        <Logout />
      </CySidebar>
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
