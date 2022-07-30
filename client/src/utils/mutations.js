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
  mutation saveBook($user: Auth, $book: SaveBookInput) {
    saveBook(user: $user, book: $book) {
      user {
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
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: String!, $token: String!) {
    removeBook(bookId: $bookId, token: $token) {
      user {
        _id
        savedBooks
      }
    }
  }
`;
