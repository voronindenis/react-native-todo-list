// @flow
import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { useTodoList, deleteTodoItem } from '@/hooks/useTodoList';
import type { TodoItemType } from '@/hooks/useTodoList';
import { TodoList } from './todo-list';

type TodoListControllerPropsType = {
  componentId: string,
};

export const TodoListController = (props: TodoListControllerPropsType) => {
  const [state, dispatch] = useTodoList();

  const handleDeleteTodoItem = React.useCallback((key: string) => {
    dispatch(deleteTodoItem(key));
  }, [dispatch]);

  const handleEditTodoItem = async (todoItem: TodoItemType) => {
    await Navigation.push(props.componentId, {
      component: {
        name: 'Task',
        passProps: {
          title: 'Edit task',
          item: todoItem,
        },
        options: {
          topBar: {
            visible: false,
            height: 0,
          },
        },
      },
    });
  };

  return (
    <TodoList
      todoList={state}
      onDeleteTodoItem={handleDeleteTodoItem}
      onEditTodoItem={handleEditTodoItem}
    />
  );
};
