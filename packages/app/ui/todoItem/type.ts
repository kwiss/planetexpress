interface Todo {
  description: string;
  id: number;
  status: string;
  title: string;
  assignee: { id: string; username: string };
}

export interface TodoItemIdentifier {
  todo?: Todo;
  edit?: Function;
}
