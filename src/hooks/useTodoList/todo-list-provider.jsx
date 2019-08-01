// @flow
import * as React from 'react';
import { identity } from '@/utils/identity';
import { todoListReducer } from './todo-list-reducer';
import { TODO_LIST_MOCK } from './todo-list-constants';
import type { TodoItemType } from './todo-list-types';

export const TodoListStateContext = React.createContext<Array<TodoItemType>>(TODO_LIST_MOCK);
export const TodoListDispatchContext = React.createContext<Function>(identity);

type ProviderPropsType = {
  children?: React.Node,
};

export const TodoListProvider = (props: ProviderPropsType) => {
  const [state, dispatch] = React.useReducer(todoListReducer, TODO_LIST_MOCK);

  return (
    <TodoListDispatchContext.Provider value={dispatch}>
      <TodoListStateContext.Provider value={state}>
        {props.children}
      </TodoListStateContext.Provider>
    </TodoListDispatchContext.Provider>
  );
};
