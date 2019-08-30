// @flow
import { gql } from 'apollo-boost';

export const UPDATE_TODO_ITEM = gql`
  mutation updateTodoItem(
    $id: ID!,
    $title: String,
    $categoryId: ID,
    $description: String,
    $expirationDate: String,
    $isDone: Boolean
  ) {
    updateTodoItem(
      id: $id,
      title: $title,
      categoryId: $categoryId
      description: $description,
      expirationDate: $expirationDate,
      isDone: $isDone
    ) {
      id,
      title,
      category {
        id,
        text,
      },
      description,
      expirationDate,
      isDone,
    }
  }
`;

export const CREATE_TODO_ITEM = gql`
  mutation addTodoItem(
    $title: String!,
    $categoryId: ID,
    $description: String!,
    $expirationDate: String!,
    $isDone: Boolean!
  ) {
    addTodoItem(
      title: $title,
      categoryId: $categoryId
      description: $description,
      expirationDate: $expirationDate,
      isDone: $isDone
    ) {
      id,
      title,
      category {
        id,
        text,
      },
      description,
      expirationDate,
      isDone,
    }
  }
`;

export const DELETE_TODO_ITEM = gql`
  mutation deleteTodoItem($id: ID!) {
    deleteTodoItem(id: $id) {
      id
    }
  }
`;

export const UPDATE_IS_DONE_FIELD_OF_TODO_ITEM = gql`
  mutation updateTodoItem(
    $id: ID!,
    $isDone: Boolean!
  ) {
    updateTodoItem(
      id: $id,
      isDone: $isDone
    ) {
      id,
      title,
      category {
        id,
        text,
      },
      description,
      expirationDate,
      isDone,
    }
  }
`;
