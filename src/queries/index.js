// @flow
import { gql } from 'apollo-boost';

export const GET_TODO_LIST_BY_CATEGORY = gql`
  query getTodoListByCategory($id: ID) {
    todoListByCategory(id: $id) {
      id
      title
      category {
        id
        text
      }
      description
      expirationDate
      isDone
    }
  }
`;

export const GET_TODO_ITEM = gql`
  query getTodoItem($id: ID!) {
    todoItem(id: $id) {
      id
      title
      category {
        id
        text
      }
      description
      expirationDate
      isDone
    }
  }
`;

export const GET_CATEGORY_LIST = gql`
  query getCategoriesList {
    categoriesList {
      id
      text
    }
  }
`;
