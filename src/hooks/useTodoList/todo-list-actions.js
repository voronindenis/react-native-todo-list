// @flow
import type { TodoItemType } from './todo-list-types';

export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM';
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
export const EDIT_TODO_ITEM = 'EDIT_TODO_ITEM';

export const addTodoItem = (todoItem: TodoItemType) => ({
  type: ADD_TODO_ITEM,
  payload: todoItem,
});

export const deleteTodoItem = (key: string) => ({
  type: DELETE_TODO_ITEM,
  payload: key,
});

export const editTodoItem = (todoItem: TodoItemType) => ({
  type: EDIT_TODO_ITEM,
  payload: todoItem,
});
