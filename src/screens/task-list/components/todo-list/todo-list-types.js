// @flow

export type TodoItemType = {
  id: string,
  title: string,
  category: {
    id: string,
    text: string,
  },
  description: string,
  expirationDate: string,
  isDone: boolean,
};
