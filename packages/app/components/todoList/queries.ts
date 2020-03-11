import gql from 'graphql-tag';

export const TODO_LIST = gql`
  query todos {
    todos: task {
      description
      id
      status
      title
      userId: user_id
    }
  }
`;
