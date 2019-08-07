// @flow
import type { ApplicationStateType, TodoItemType } from './todo-list-types';

export const editTodoItem = (state: ApplicationStateType, editedTodoItem: TodoItemType) => {
  const newState = [...state];
  const editedTodoItemIndex = newState.findIndex((todoItem: TodoItemType) => todoItem.key === editedTodoItem.key);
  newState.splice(editedTodoItemIndex, 1, editedTodoItem);
  return newState;
};
