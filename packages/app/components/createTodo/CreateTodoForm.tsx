import { useFormik } from 'formik';
import React, { FunctionComponent } from 'react';
import { Box, Input, Label, Select, Text, Textarea } from 'theme-ui';

import { CyButton } from '../../ui/Button';
import { todoSchema } from './schema';
import { CreateTodoIdentifier } from './type';

const CreateTodoForm: FunctionComponent<CreateTodoIdentifier> = props => {
  const { handleSubmit, initialValues, users } = props;

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
    validationSchema: todoSchema,
  });
  return (
    <Box as="form" onSubmit={formik.handleSubmit}>
      <Label htmlFor="username">Title</Label>
      {formik.touched.title && <Text>{formik.errors.title}</Text>}
      <Input
        name="title"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      <Label htmlFor="password">Description</Label>
      {formik.touched.description && <Text>{formik.errors.description}</Text>}
      <Textarea
        name="description"
        rows="6"
        onChange={formik.handleChange}
        value={formik.values.description}
      />
      <Label htmlFor="assigneeId">Assignee</Label>
      {formik.touched.assigneeId && <Text>{formik.errors.assigneeId}</Text>}
      <Select
        mb="4"
        name="assigneeId"
        onChange={formik.handleChange}
        value={formik.values.assigneeId ? formik.values.assigneeId : ''}
      >
        <option value={null}>choose someone</option>
        {users.map(user => {
          return (
            <option value={user.id} key={user.id}>
              {user.username}
            </option>
          );
        })}
      </Select>
      <Label htmlFor="status">Status</Label>
      {formik.touched.status && <Text>{formik.errors.status}</Text>}
      <Select
        mb="4"
        name="status"
        onChange={formik.handleChange}
        value={formik.values.status}
      >
        <option>todo</option>
        <option>doing</option>
        <option>done</option>
      </Select>
      <CyButton variant={'primary'} type="submit">
        Submit
      </CyButton>
    </Box>
  );
};

export { CreateTodoForm };
