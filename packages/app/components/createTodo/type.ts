interface InitialValuesIdentifier {
  description: string;
  status: string;
  title: string;
  assigneeId: string;
}

export interface CreateTodoIdentifier {
  // TODO fix with formik type
  handleSubmit?: any;
  initialValues: InitialValuesIdentifier;
  users: {
    id: string;
    username: string;
  }[];
}
