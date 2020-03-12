import gql from 'graphql-tag';

export const TODO_LIST = gql`
  query todos {
    todos: task(order_by: { title: asc }) {
      description
      id
      status
      title
      assignee {
        username
        id
      }
    }
  }
`;
