import gql from 'graphql-tag';

export const USERS = gql`
  query Users {
    users: user {
      id
      username
    }
  }
`;
