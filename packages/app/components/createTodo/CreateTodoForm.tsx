import { useFormik } from 'formik';
import React, { FunctionComponent } from 'react';
import { Box, Input, Label, Select, Text, Textarea } from 'theme-ui';

import { CyButton } from '../../ui/Button';
import { todoSchema } from './schema';
import { CreateTodoIdentifier } from './type';

const initialValues = {
  assignee: '',
  description: '',
  status: 'todo',
  title: '',
};

const CreateTodoForm: FunctionComponent<CreateTodoIdentifier> = (props) => {
  const { handleSubmit } = props;

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
      <Label htmlFor="comment">Comment</Label>
      {formik.touched.assignee && <Text>{formik.errors.assignee}</Text>}
      <Select
        mb="4"
        name="assignee"
        onChange={formik.handleChange}
        value={formik.values.assignee}
      >
        <option>Beep</option>
        <option>Boop</option>
        <option>Blip</option>
      </Select>
      <Label htmlFor="comment">Status</Label>
      {formik.touched.status && <Text>{formik.errors.assignee}</Text>}
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
      <CyButton type="submit">Submit</CyButton>
    </Box>
  );
};

export { CreateTodoForm };
