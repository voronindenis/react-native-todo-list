// @flow
import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';
import type { TodoItemType } from '@/hooks/useTodoList';
import { TodoList } from './todo-list';

type TodoListControllerPropsType = {
  componentId: string,
};

const GET_TODO_LIST = gql`
  query getTodoList {
    todoList {
      id
      title
      category {
        id
        text
      }
      description
      expirationDate
      isDone
    }
  }
`;

const DELETE_TODO_ITEM = gql`
  mutation deleteTodoItem($id: ID!) {
    deleteTodoItem(id: $id) {
      id
    }
  }
`;

export const TodoListController = (props: TodoListControllerPropsType) => {
  const { data } = useQuery(GET_TODO_LIST);

  const [ deleteTodoItem ] = useMutation(
    DELETE_TODO_ITEM,
    {
      update(cache, {data: { deleteTodoItem }}) {
        const { todoList } = cache.readQuery({ query: GET_TODO_LIST });
        cache.writeQuery({
          query: GET_TODO_LIST,
          data: {todoList: todoList.filter((todoItem: TodoItemType) => todoItem.id !== deleteTodoItem.id)},
        });
      }
    }
  );

  const handleDeleteTodoItem = React.useCallback((id: string) => {
    deleteTodoItem({ variables: { id: id } });
  });

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
