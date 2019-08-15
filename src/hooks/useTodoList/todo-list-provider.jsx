// @flow
import * as React from 'react';
import type { ApplicationStateType } from './todo-list-types';

export const TodoListStateContext = React.createContext<any>();
export const TodoListDispatchContext = React.createContext<any>();
export const TodoListSubscribeContext = React.createContext<any>();

type ProviderPropsType = {
  children?: React.Node,
  dispatch: (payload: any) => Object,
  getState: () => ApplicationStateType,
  subscribe: (func: Function) => void;
};

export const TodoListProvider = (props: ProviderPropsType) => {
  return (
    <TodoListDispatchContext.Provider value={props.dispatch}>
      <TodoListStateContext.Provider value={props.getState}>
        <TodoListSubscribeContext.Provider value={props.subscribe}>
          {props.children}
        </TodoListSubscribeContext.Provider>
      </TodoListStateContext.Provider>
    </TodoListDispatchContext.Provider>
  );
};
