import { useQuery } from '@apollo/react-hooks';
import React, { FunctionComponent } from 'react';
import { Box } from 'theme-ui';

import { TodoItem } from '../../ui/todoItem';
import { TODO_LIST } from './queries';

const TodoList: FunctionComponent = () => {
  const { data, error, loading } = useQuery(TODO_LIST);

  if (loading) {
    return <Box>Loading</Box>;
  }
  if (error) {
    return <Box>{error}</Box>;
  }

  const { todos } = data;
  return (
    <Box mt="6">
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </Box>
  );
};

export { TodoList };
