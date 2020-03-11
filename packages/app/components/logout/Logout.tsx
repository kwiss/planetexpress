import React, { FunctionComponent } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Box, Flex, Text } from 'theme-ui';

import { logout } from '../../util/auth';

// TODO split style in separate item menu component
const Logout: FunctionComponent = () => {
  return (
    <Box
      sx={{ '&:hover': { opacity: '0.6' }, cursor: 'pointer' }}
      onClick={(e): void => {
        logout();
      }}
    >
      <Flex sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Text>Logout</Text>
        <FiLogOut />
      </Flex>
    </Box>
  );
};

export { Logout };
