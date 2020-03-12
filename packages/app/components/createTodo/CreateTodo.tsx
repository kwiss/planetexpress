import { useMutation, useQuery } from '@apollo/react-hooks';
import React, { FunctionComponent } from 'react';
import { Box } from 'theme-ui';

import { CreateTodoForm } from './CreateTodoForm';
import { CREATE_TODO } from './mutations';
import { USERS } from './queries';

interface CreateTodoIdentifier {
  onSubmit?: Function;
}

const CreateTodo: FunctionComponent<CreateTodoIdentifier> = props => {
  const { onSubmit } = props;
  const [createTodo] = useMutation(CREATE_TODO);
  const { data, loading, error } = useQuery(USERS);

  if (loading) {
    return <Box>Loading</Box>;
  }
  if (error) {
    return <Box>{error}</Box>;
  }

  const users = data.users;
  const initialValues = {
    assigneeId: '',
    description: '',
    status: 'todo',
    title: '',
  };
  const handleSubmit = (values, { setSubmitting, setErrors }): void => {
    try {
      createTodo({
        refetchQueries: ['todos'],
        variables: {
          assigneeId: values.assigneeId ? values.assigneeId : null,
          description: values.description,
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
    <CreateTodoForm
      users={users}
      initialValues={initialValues}
      handleSubmit={handleSubmit}
    />
  );
};

CreateTodo.displayName = 'CreateTodo';

export { CreateTodo };
