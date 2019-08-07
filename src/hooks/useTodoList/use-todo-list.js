// @flow
import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { noop } from '@/utils/noop';
import { TodoListStateContext, TodoListDispatchContext, TodoListSubscribeContext } from './todo-list-provider';

export function useTodoList() {
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);

  const getState = React.useContext(TodoListStateContext);
  const state = getState();
  const dispatch = React.useContext(TodoListDispatchContext);
  const subscribe = React.useContext(TodoListSubscribeContext);

  const handleChange = () => {
    forceUpdate();
  };

  React.useEffect(() => {
    const listener = Navigation.events().registerComponentDidAppearListener(
      () => {
        forceUpdate();
        subscribe(handleChange.bind(this));
      }
    );
    return () => listener.remove();
  }, [subscribe]);

  React.useEffect(() => {
    const listener = Navigation.events().registerComponentDidDisappearListener(
      () => {
        subscribe(noop);
      }
    );
    return () => listener.remove();
  }, [subscribe]);

  return [state, dispatch];
}
