import gql from 'graphql-tag';

export const UPDATE_TODO = gql`
  mutation update_task(
    $description: String!
    $id: uuid!
    $status: String!
    $title: String!
    $userId: Int
  ) {
    update_task(
      where: { id: { _eq: $id } }
      _set: {
        description: $description
        id: $id
        status: $status
        title: $title
        user_id: $userId
      }
    ) {
      returning {
        description
        id
        status
        title
        user_id
      }
    }
  }
`;
