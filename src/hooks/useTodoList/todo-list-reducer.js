// @flow
import { DELETE_TODO_ITEM, ADD_TODO_ITEM } from './todo-list-actions';

export const INITIAL_STATE = [];

export const todoListReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_TODO_ITEM:
      return [...state, payload];
    case DELETE_TODO_ITEM: {
      return state.filter((item: { text: string }, index: number) => index !== payload);
    }
    default:
      return state;
  }
};
