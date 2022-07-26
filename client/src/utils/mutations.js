import { gql } from "@apollo/client";

// TODO
export const LOGIN_USER = gql`
  mutation loginUser($thoughtText: String!, $thoughtAuthor: String!) {
    loginUser(thoughtText: $thoughtText, thoughtAuthor: $thoughtAuthor) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

// TODO
export const ADD_USER = gql`
  mutation addUser($thoughtText: String!, $thoughtAuthor: String!) {
    addUser(thoughtText: $thoughtText, thoughtAuthor: $thoughtAuthor) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

// TODO
export const SAVE_BOOK = gql`
  mutation saveBook($thoughtText: String!, $thoughtAuthor: String!) {
    saveBook(thoughtText: $thoughtText, thoughtAuthor: $thoughtAuthor) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

// TODO
export const REMOVE_BOOK = gql`
  mutation removeBook($thoughtText: String!, $thoughtAuthor: String!) {
    removeBook(thoughtText: $thoughtText, thoughtAuthor: $thoughtAuthor) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;
