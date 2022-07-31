import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        username
        email
      }
      token
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        username
        email
      }
      token
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookToSave: SaveBookInput!, $userId: String!) {
    saveBook(bookToSave: $bookToSave, userId: $userId) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!, $token: String!) {
    removeBook(bookId: $bookId, token: $token) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;
