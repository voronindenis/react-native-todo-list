// @flow

export const filterByIndex = (arr: Array<any>, index: number): Array<any> => (
  arr.filter((el: any, i: number) => i !== index)
);
