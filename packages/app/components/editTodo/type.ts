interface InitialValuesIdentifier {
  description: string;
  status: string;
  title: string;
  assigneeId: number;
}

export interface EditTodoIdentifier {
  // TODO fix with formik type
  handleSubmit?: any;
  initialValues: InitialValuesIdentifier;
  users: {
    id: string;
    username: string;
  }[];
}
