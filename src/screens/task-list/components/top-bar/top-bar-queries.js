// @flow
import { gql } from 'apollo-boost';

export const GET_CATEGORY_LIST = gql`
  query getCategoriesList {
    categoriesList {
      id
      text
    }
  }
`;

export const GET_TASK_LIST_ITEMS_COUNT = gql`
  query getTodoItemsCount {
    todoItemsCount
  }
`;
