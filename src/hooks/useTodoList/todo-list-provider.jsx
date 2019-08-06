// @flow
import * as React from 'react';

export const TodoListStateContext = React.createContext();
export const TodoListDispatchContext = React.createContext();

type ProviderPropsType = {
  children?: React.Node,
  dispatch: (payload: any) => void,
  getState: () => Object, //TODO [Denis Voronin] Type it
};

export const TodoListProvider = (props: ProviderPropsType) => {
  return (
    <TodoListDispatchContext.Provider value={props.dispatch}>
      <TodoListStateContext.Provider value={props.getState}>
        {props.children}
      </TodoListStateContext.Provider>
    </TodoListDispatchContext.Provider>
  );
};
