import * as yup from 'yup';

const todoSchema = yup.object().shape({
  assigneeId: yup.string(),
  description: yup.string().required(),
  status: yup.string().required(),
  title: yup.string().required(),
});

export { todoSchema };
