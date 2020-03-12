import React, { FunctionComponent } from 'react';
import { Avatar, Badge, Box, Flex, Text } from 'theme-ui';

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

const TodoItem: FunctionComponent<TodoItemIdentifier> = props => {
  const {
    edit,
    todo: { description, id, status, title, assignee },
  } = props;

  return (
    <Flex sx={todoItemStyle}>
      <Avatar
        sx={{ height: '16px', width: '16px' }}
        src={`https://api.adorable.io/avatars/48/${
          assignee ? assignee.id : 'test'
        }.png`}
      />
      <Box sx={{ bg: 'greyBorder', height: '16px', mx: '3', width: '1px' }} />
      <Text>{title}</Text>
      <Box sx={{ bg: 'greyBorder', height: '16px', mx: '3', width: '1px' }} />
      {assignee && <Text>{assignee.username}</Text>}
      <Flex sx={{ ml: 'auto' }}>
        <Text
          sx={{ cursor: 'pointer', fontSize: 1, mr: 2 }}
          onClick={() => edit(id)}
        >
          Editer
        </Text>
        <Badge sx={{ lineHeight: '20px' }}>{status}</Badge>
      </Flex>
    </Flex>
  );
};

export { TodoItem };
