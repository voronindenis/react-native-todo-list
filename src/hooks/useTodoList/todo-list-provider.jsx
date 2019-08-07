// @flow
import * as React from 'react';

export const TodoListStateContext = React.createContext();
export const TodoListDispatchContext = React.createContext();
export const TodoListSubscribeContext = React.createContext();

type ProviderPropsType = {
  children?: React.Node,
  dispatch: (payload: any) => void,
  getState: () => Object, //TODO [Denis Voronin] Type it
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
