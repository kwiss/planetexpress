import { useMutation } from '@apollo/react-hooks';
import React, { FunctionComponent } from 'react';

import { CreateTodoForm } from './CreateTodoForm';
import { CREATE_TODO } from './mutations';

interface CreateTodoIdentifier {
  onSubmit?: Function;
}

const CreateTodo: FunctionComponent<CreateTodoIdentifier> = props => {
  const { onSubmit } = props;
  const [createTodo] = useMutation(CREATE_TODO);

  const handleSubmit = (values, { setSubmitting, setErrors }): void => {
    try {
      createTodo({
        refetchQueries: ['todos'],
        variables: {
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
  return <CreateTodoForm handleSubmit={handleSubmit} />;
};

CreateTodo.displayName = 'CreateTodo';

export { CreateTodo };
