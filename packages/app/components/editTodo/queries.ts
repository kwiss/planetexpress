import gql from 'graphql-tag';

export const SINGLE_TASK = gql`
  query SingleTask($id: uuid!) {
    tasks: task(where: { id: { _eq: $id } }) {
      description
      id
      status
      title
      userId: user_id
    }
  }
`;
