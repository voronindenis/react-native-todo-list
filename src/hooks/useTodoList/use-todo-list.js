// @flow
import { useContext } from 'react';
import { TodoListStateContext, TodoListDispatchContext } from './todo-list-provider';

export const useTodoList = () => {
  const getState = useContext(TodoListStateContext);
  const state = getState();
  const dispatch = useContext(TodoListDispatchContext);
  return [state, dispatch];
};
