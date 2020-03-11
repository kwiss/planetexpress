interface Todo {
  description: string;
  id: number;
  status: string;
  title: string;
  userId: number;
}

export interface TodoItemIdentifier {
  todo?: Todo;
}
