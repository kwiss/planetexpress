import gql from 'graphql-tag';

export const CREATE_TODO = gql`
  mutation createTodo(
    $description: String!
    $status: String!
    $title: String!
  ) {
    insert_task(
      objects: { description: $description, title: $title, status: $status }
    ) {
      returning {
        description
        id
        status
        title
        assignee_id
      }
    }
  }
`;
