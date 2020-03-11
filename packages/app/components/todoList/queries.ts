import gql from 'graphql-tag';

export const TODO_LIST = gql`
  query tasks {
    todos: tasks {
      description
      id
      status
      title
      userId: user_id
    }
  }
`;
