// @flow

import { gql } from 'apollo-boost';

export const DELETE_TODO_ITEM = gql`
  mutation deleteTodoItem($id: ID!) {
    deleteTodoItem(id: $id) {
      id
    }
  }
`;
