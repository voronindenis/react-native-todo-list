// @flow
import * as React from 'react';
import { useTodoList, deleteTodoItem } from '../../../../hooks/useTodoList/index';
import { TodoList } from './todo-list';

export const TodoListController = () => {
  const [state, dispatch] = useTodoList();

  const handleDeleteTodoItem = React.useCallback((index: number) => {
    dispatch(deleteTodoItem(index));
  }, [dispatch]);

  return (
    <TodoList
      todoList={state}
      onDeleteTodoItem={handleDeleteTodoItem}
    />
  );
};
