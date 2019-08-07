// @flow

export type TodoItemType = {
  key: string,
  title: string,
  category: string,
  description: string,
  expirationDate: string,
  isDone: boolean,
};

export type ApplicationStateType = Array<TodoItemType>;
