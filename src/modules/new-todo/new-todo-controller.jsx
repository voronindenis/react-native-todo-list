// @flow
import * as React from 'react';
import { useTodoList, addTodoItem } from '@/hooks/useTodoList';
import { NewTodo } from './new-todo';

export const NewTodoController = () => {
  const [, dispatch] = useTodoList();
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (value: string) => setInputValue(value);

  const handleAddTodoItem = React.useCallback((event: Event) => {
    event.preventDefault();
    dispatch(addTodoItem({ text: inputValue }));
    setInputValue('');
  }, [dispatch, inputValue]);

  return (
    <NewTodo
      inputValue={inputValue}
      handleInputChange={handleInputChange}
      handleAddTodoItem={handleAddTodoItem}
    />
  );
};
