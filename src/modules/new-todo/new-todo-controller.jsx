// @flow
import * as React from 'react';
import { NewTodo } from './new-todo';

export const NewTodoController = () => {
  const handleAddButtonPress = () => null;
  return (
    <NewTodo
      onAddButtonPress={handleAddButtonPress}
    />
  );
};
