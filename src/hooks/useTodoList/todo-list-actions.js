// @flow
import type { TodoItemType } from './todo-list-types';

export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';

export const addTodoItem = (todoItem: TodoItemType) => ({
  type: ADD_TODO_ITEM,
  payload: todoItem,
});

export const deleteTodoItem = (index: number) => ({
  type: DELETE_TODO_ITEM,
  payload: index,
});
