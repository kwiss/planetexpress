import React from 'react';
import { Box, Button, Flex } from 'theme-ui';

const CyIconButton = (props) => {
  const { children, sx, type, Icon } = props;
  return (
    <Button type={type} sx={{ px: '5', py: '4', ...sx }}>
      <Flex sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ mr: '2' }}>{children}</Box>
        <Icon />
      </Flex>
    </Button>
  );
};

export { CyIconButton };
