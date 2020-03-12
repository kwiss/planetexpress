import { useMutation, useQuery } from '@apollo/react-hooks';
import React, { FunctionComponent } from 'react';
import { Box } from 'theme-ui';

import { EditTodoForm } from './EditTodoForm';
import { UPDATE_TODO } from './mutations';
import { SINGLE_TASK } from './queries';

interface EditTodoIdentifier {
  onSubmit?: Function;
  id: number;
}

const EditTodo: FunctionComponent<EditTodoIdentifier> = props => {
  const { onSubmit, id } = props;
  const { data, loading, error } = useQuery(SINGLE_TASK, {
    variables: {
      id: id,
    },
  });
  const [EditTodo] = useMutation(UPDATE_TODO);

  if (loading) {
    return <Box>Loading</Box>;
  }
  if (error) {
    return <Box>{error}</Box>;
  }

  const users = data.users;
  const [task] = data.tasks;

  const initialValues = {
    assigneeId: task.assigneeId,
    description: task.description,
    status: task.status,
    title: task.title,
  };
  const handleSubmit = (values, { setSubmitting, setErrors }): void => {
    try {
      EditTodo({
        refetchQueries: ['todos'],
        variables: {
          assigneeId: values.assigneeId,
          description: values.description,
          id: task.id,
          status: values.status,
          title: values.title,
        },
      });
      // execute onSubmit function if exist
      if (typeof onSubmit === 'function') {
        onSubmit();
      }
    } catch (e) {
      throw new Error(e);
    }
    setSubmitting(false);
  };
  return (
    <EditTodoForm
      users={users}
      initialValues={initialValues}
      handleSubmit={handleSubmit}
    />
  );
};

EditTodo.displayName = 'EditTodo';

export { EditTodo };
