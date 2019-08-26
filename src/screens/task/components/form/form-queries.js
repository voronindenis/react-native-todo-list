import { gql } from 'apollo-boost';

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

export const GET_TODO_LIST = gql`
  query getTodoList {
    todoList {
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
