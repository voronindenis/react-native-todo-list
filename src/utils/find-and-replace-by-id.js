// @flow

export const findAndReplaceById = (array: Array<{ id: string }>, element: { id: string }) => {
  const newArray = [...array];
  const index = newArray.findIndex((el: { id: string }) => el.id === element.id);
  newArray.splice(index, 1, element);
  return newArray;
};
