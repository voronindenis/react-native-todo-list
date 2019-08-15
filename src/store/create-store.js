// @flow
import type { ApplicationStateType } from '@/hooks/useTodoList';

type ReducerType = (state: ApplicationStateType, action: { type: string, payload: any }) => ApplicationStateType;

export function createStore(reducer: ReducerType, initialState: ApplicationStateType) {
  let state = initialState;
  const curReducer = reducer;
  let listener = () => {};

  const dispatch = (action: { type: string, payload: any }) => {
    state = curReducer(state, action);
    listener();
    return action;
  };

  const getState = () => state;

  const subscribe = (newListener: Function) => {
    listener = newListener;
  };

  return [getState, dispatch, subscribe];
}
