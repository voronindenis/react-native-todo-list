// @flow

export function createStore<R, S>(reducer: R, initialState: S) {
  let state = initialState;
  const curReducer = reducer;

  const dispatch = (action: { type: string, payload: any }) => {
    state = curReducer(state, action);
  };

  const getState = () => state;

  return [getState, dispatch];
}
