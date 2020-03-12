import gql from 'graphql-tag';

export const UPDATE_TODO = gql`
  mutation update_task(
    $description: String!
    $id: uuid!
    $status: String!
    $title: String!
    $assigneeId: uuid
  ) {
    update_task(
      where: { id: { _eq: $id } }
      _set: {
        description: $description
        id: $id
        status: $status
        title: $title
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
