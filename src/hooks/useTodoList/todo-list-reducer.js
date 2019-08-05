// @flow
import { filterByIndex } from '@/utils/filterByIndex';
import { DELETE_TODO_ITEM, ADD_TODO_ITEM } from './todo-list-actions';
import type { TodoItemType } from './todo-list-types';

export const todoListReducer = (
  state: Array<TodoItemType> = [], { type, payload }: { type: string, payload: any }
) => {
  switch (type) {
    case ADD_TODO_ITEM:
      return [...state, payload];
    case DELETE_TODO_ITEM: {
      return filterByIndex(state, payload);
    }
    default:
      return state;
  }
};
