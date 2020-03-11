import { useFormik } from 'formik';
import React, { FunctionComponent } from 'react';
import { Box, Input, Label, Select, Text, Textarea } from 'theme-ui';

import { CyButton } from '../../ui/Button';
import { todoSchema } from './schema';
import { EditTodoIdentifier } from './type';

const EditTodoForm: FunctionComponent<EditTodoIdentifier> = props => {
  const { handleSubmit, initialValues } = props;

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
      <Label htmlFor="status">Assignee</Label>
      {formik.touched.userId && <Text>{formik.errors.userId}</Text>}
      <Select mb="4" name="userId" onChange={formik.handleChange} value={1}>
        <option>Beep</option>
        <option>Boop</option>
        <option>Blip</option>
      </Select>
      <Label htmlFor="status">Status</Label>
      {formik.touched.status && <Text>{formik.errors.userId}</Text>}
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

export { EditTodoForm };
