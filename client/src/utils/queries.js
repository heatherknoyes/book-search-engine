import { gql } from "@apollo/client";

// TODO
export const GET_ME = gql`
  query me($username: String!) {
    me(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;
