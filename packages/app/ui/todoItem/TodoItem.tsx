import React, { FunctionComponent } from 'react';
import { Avatar, Box, Flex, Text } from 'theme-ui';

import { TodoItemIdentifier } from './type';

const todoItemStyle = {
  alignItems: 'center',
  bg: 'background',
  border: '1px solid',
  borderColor: 'greyBorder',
  borderRadius: 'default',
  lineHeight: '1.4',
  mb: '2',
  p: '3',
};

const TodoItem: FunctionComponent<TodoItemIdentifier> = (props) => {
  const {
    todo: { description, id, status, title, userId },
  } = props;
  return (
    <Flex sx={todoItemStyle}>
      <Avatar
        sx={{ height: '16px', width: '16px' }}
        src={`https://api.adorable.io/avatars/48/${userId}.png`}
      />
      <Box sx={{ bg: 'greyBorder', height: '16px', mx: '3', width: '1px' }} />
      <Text>{title}</Text>
    </Flex>
  );
};

export { TodoItem };
