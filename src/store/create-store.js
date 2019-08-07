// @flow

export function createStore<R, S>(reducer: R, initialState: S) {
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
