// @flow
import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useTodoList } from '@/hooks/useTodoList';
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
  const [, forceUpdate] = React.useReducer(x => x + 1, 0);

  const [state, dispatch, subscribe] = useTodoList();

  const handleChange = () => {
    forceUpdate();
  };

  React.useEffect(() => {
    const listener = Navigation.events().registerComponentDidAppearListener(
      () => {
        forceUpdate();
        subscribe(handleChange.bind(this));
      }
    );
    return () => listener.remove();
  }, [subscribe]);

  const { loading, error, data } = useQuery(GET_TODO_LIST);
  console.log(data);

  const [ updateTodoItem ] = useMutation(
    DELETE_TODO_ITEM,
    {
      update(cache, {data: { updateTodoItem }}) {
        const { todoList } = cache.readQuery({ query: GET_TODO_LIST });
        cache.writeQuery({
          query: GET_TODO_LIST,
          data: {todoList: todoList.filter((todoItem: TodoItemType) => todoItem.id !== updateTodoItem.id)},
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
