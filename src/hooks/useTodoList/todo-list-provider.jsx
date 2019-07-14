// @flow
import * as React from 'react';
import { identity } from '@/utils/identity';
import { INITIAL_STATE, todoListReducer } from './todo-list-reducer';

export const TodoListStateContext = React.createContext<Array<{ text: string }>>(INITIAL_STATE);
export const TodoListDispatchContext = React.createContext<Function>(identity);

type ProviderPropsType = {
  children?: React.Node,
};

export const TodoListProvider = (props: ProviderPropsType) => {
  const [state, dispatch] = React.useReducer(todoListReducer, INITIAL_STATE);

  return (
    <TodoListDispatchContext.Provider value={dispatch}>
      <TodoListStateContext.Provider value={state}>
        {props.children}
      </TodoListStateContext.Provider>
    </TodoListDispatchContext.Provider>
  );
};
