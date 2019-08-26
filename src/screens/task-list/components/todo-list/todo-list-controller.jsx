// @flow
import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_TODO_LIST } from './todo-list-queries';
import { DELETE_TODO_ITEM } from './todo-list-mutations';
import type { TodoItemType } from './todo-list-types';
import { TodoList } from './todo-list';

type TodoListControllerPropsType = {
  componentId: string,
};

export const TodoListController = (props: TodoListControllerPropsType) => {
  const { data } = useQuery(GET_TODO_LIST);

  const [deleteTodo] = useMutation(
    DELETE_TODO_ITEM,
    {
      update(cache, { data: { deleteTodoItem } }) {
        const { todoList } = cache.readQuery({ query: GET_TODO_LIST });
        cache.writeQuery({
          query: GET_TODO_LIST,
          data: { todoList: todoList.filter((todoItem: TodoItemType) => todoItem.id !== deleteTodoItem.id) },
        });
      },
    }
  );

  const handleDeleteTodoItem = React.useCallback((id: string) => {
    deleteTodo({ variables: { id } });
  }, [deleteTodo]);

  const handleEditTodoItem = async (id: string) => {
    await Navigation.push(props.componentId, {
      component: {
        name: 'Task',
        passProps: {
          title: 'Edit task',
          id,
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
      todoList={data.todoList || []}
      onDeleteTodoItem={handleDeleteTodoItem}
      onEditTodoItem={handleEditTodoItem}
    />
  );
};
