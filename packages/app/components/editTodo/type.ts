interface InitialValuesIdentifier {
  description: string;
  status: string;
  title: string;
  userId: number;
}

export interface EditTodoIdentifier {
  // TODO fix with formik type
  handleSubmit?: any;
  initialValues: InitialValuesIdentifier;
}
