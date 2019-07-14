// @flow
import { useContext } from 'react';
import { TodoListStateContext, TodoListDispatchContext } from './todo-list-provider';

export const useTodoList = () => {
  const state = useContext(TodoListStateContext);
  const dispatch = useContext(TodoListDispatchContext);
  return [state, dispatch];
};
