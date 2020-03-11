import React, { FunctionComponent } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { Box, Flex } from 'theme-ui';

import { CyIconButton } from '../../ui/IconButton';

const ToolBar: FunctionComponent = () => {
  return (
    // TODO split style in separate ToolboxContainer and boardDescription components
    <Flex
      sx={{ alignItems: 'center', justifyContent: 'space-between', my: '5' }}
    >
      <Box sx={{ bg: 'greyHyperLight', borderRadius: 'default', p: '3' }}>
        Add a description to your board
      </Box>
      <CyIconButton Icon={IoMdAdd}>New ticket</CyIconButton>
    </Flex>
  );
};

export { ToolBar };
