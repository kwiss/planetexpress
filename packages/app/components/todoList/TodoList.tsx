import { useQuery } from '@apollo/react-hooks';
import React, { FunctionComponent, useContext } from 'react';
import { Box } from 'theme-ui';

import { PanelContext } from '../../ui/panel/context';
import { TodoItem } from '../../ui/todoItem';
import { EditTodo } from '../editTodo';
import { TODO_LIST } from './queries';

const TodoList: FunctionComponent = () => {
  const {
    panel: { isOpen },
    togglePanel,
  } = useContext(PanelContext);

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
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            edit={(id): void =>
              togglePanel({
                Component: () => (
                  <EditTodo
                    id={id}
                    onSubmit={(): void =>
                      togglePanel({ Component: null, isOpen: false })
                    }
                  />
                ),
                isOpen: !isOpen,
              })
            }
          />
        );
      })}
    </Box>
  );
};

export { TodoList };
