import { useMutation } from '@apollo/react-hooks';
import React, { FunctionComponent } from 'react';

import { CreateTodoForm } from './CreateTodoForm';
import { CREATE_TODO } from './mutations';

const CreateTodo: FunctionComponent = () => {
  const [createTodo] = useMutation(CREATE_TODO);
  const handleSubmit = (values, { setSubmitting, setErrors }) => {
    console.log(values);
    try {
      createTodo({
        refetchQueries: ['tasks'],
        variables: {
          description: values.description,
          status: values.status,
          title: values.title,
        },
      });
    } catch (e) {
      throw new Error(e);
    }
    setSubmitting(false);
  };
  return <CreateTodoForm handleSubmit={handleSubmit} />;
};

export { CreateTodo };
