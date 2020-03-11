import React, { FunctionComponent, useContext } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { Box, Flex } from 'theme-ui';

import { CyIconButton } from '../../ui/IconButton';
import { PanelContext } from '../../ui/panel/context';
import { CreateTodo } from '../createTodo';

const ToolBar: FunctionComponent = () => {
  const {
    panel: { isOpen },
    togglePanel,
  } = useContext(PanelContext);

  // TODO check that it doesn't leak
  const CreateTodoComponent: FunctionComponent = () => {
    return (
      <CreateTodo
        onSubmit={(): void => {
          togglePanel({ Component: null, isOpen: false });
        }}
      />
    );
  };

  return (
    // TODO split style in separate ToolboxContainer and boardDescription components
    <Flex
      sx={{ alignItems: 'center', justifyContent: 'space-between', my: '5' }}
    >
      <Box sx={{ bg: 'greyHyperLight', borderRadius: 'default', p: '3' }}>
        Add a description to your board
      </Box>
      <CyIconButton
        onClick={(e): void => {
          togglePanel({
            Component: CreateTodoComponent,
            isOpen: !isOpen,
          });
        }}
        Icon={IoMdAdd}
      >
        New ticket
      </CyIconButton>
    </Flex>
  );
};

ToolBar.displayName = 'ToolBar';

export { ToolBar };
