// @flow
import { DELETE_TODO_ITEM, ADD_TODO_ITEM, EDIT_TODO_ITEM } from './todo-list-actions';
import type { TodoItemType, ApplicationStateType } from './todo-list-types';
import { editTodoItem } from './todo-list-utils';

export const todoListReducer = (
  state: ApplicationStateType = [], { type, payload }: { type: string, payload: any }
) => {
  switch (type) {
    case ADD_TODO_ITEM:
      return [...state, payload];
    case EDIT_TODO_ITEM:
      return editTodoItem(state, payload);
    case DELETE_TODO_ITEM: {
      return state.filter((item: TodoItemType) => item.key !== payload);
    }
    default:
      return state;
  }
};
