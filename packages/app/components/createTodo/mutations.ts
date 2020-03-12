import gql from 'graphql-tag';

export const CREATE_TODO = gql`
  mutation createTodo(
    $description: String!
    $status: String!
    $title: String!
    $assigneeId: uuid
  ) {
    insert_task(
      objects: {
        description: $description
        title: $title
        status: $status
        assignee_id: $assigneeId
      }
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
