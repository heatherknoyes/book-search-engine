import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me($username: String, $_id: ID) {
    me(username: $username, _id: $_id) {
      _id
      username
      email
      password
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
