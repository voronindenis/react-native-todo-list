// @flow
import * as React from 'react';
import { TodoListStateContext, TodoListDispatchContext, TodoListSubscribeContext } from './todo-list-provider';

export function useTodoList() {
  const getState = React.useContext(TodoListStateContext);
  const state = getState();
  const dispatch = React.useContext(TodoListDispatchContext);
  const subscribe = React.useContext(TodoListSubscribeContext);

  return [state, dispatch, subscribe];
}
