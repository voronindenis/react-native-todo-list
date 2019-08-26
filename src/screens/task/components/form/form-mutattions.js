// @flow
import { gql } from 'apollo-boost';

export const UPDATE_TODO_ITEM = gql`
  mutation updateTodoItem(
    $id: ID,
    $title: String!,
    $categoryId: ID,
    $description: String!,
    $expirationDate: String!,
    $isDone: Boolean!
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
