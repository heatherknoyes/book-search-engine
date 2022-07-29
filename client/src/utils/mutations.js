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
  mutation saveBook($_id: String!, $bookId: String!) {
    saveBook(_id: $_id, bookId: $bookId) {
      user {
        _id
        books {
          bookId
        }
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($_id: String!, $bookId: String!) {
    removeBook(_id: $_id, bookId: $bookId) {
      user {
        _id
        books {
          bookId
        }
      }
    }
  }
`;
