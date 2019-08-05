// @flow
import { useContext } from 'react';
import { TodoListStateContext, TodoListDispatchContext } from './todo-list-provider';

export const useTodoList = () => {
  const state = useContext(TodoListStateContext);
  const dispatch = useContext(TodoListDispatchContext);
  console.log(state);
  console.log(new Error('trace'));
  return [state, dispatch];
};
