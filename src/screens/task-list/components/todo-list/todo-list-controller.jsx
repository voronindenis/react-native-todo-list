// @flow
import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_TODO_LIST_BY_CATEGORY } from '@/queries';
import { UPDATE_IS_DONE_FIELD_OF_TODO_ITEM, DELETE_TODO_ITEM } from '@/mutations';
import { findAndReplaceById } from '@/utils/find-and-replace-by-id';
import { BlockLoader } from '@/components/block-loader';
import type { CategoryItemType } from '../../task-list-types';
import type { TodoItemType } from './todo-list-types';
import { TodoList } from './todo-list';

type TodoListControllerPropsType = {
  activeCategory: CategoryItemType | void,
  componentId: string,
};

export const TodoListController = (props: TodoListControllerPropsType) => {
  const categoryId = props.activeCategory && props.activeCategory.isFilter
    ? props.activeCategory.id
    : '';
  const { data, loading } = useQuery(GET_TODO_LIST_BY_CATEGORY, { variables: { id: categoryId } });
  console.log({
    loading,
    data,
  });

  const [deleteTodo] = useMutation(
    DELETE_TODO_ITEM,
    {
      update(cache, { data: { deleteTodoItem } }) {
        const { todoList } = cache.readQuery({ query: GET_TODO_LIST_BY_CATEGORY });
        cache.writeQuery({
          query: GET_TODO_LIST_BY_CATEGORY,
          data: { todoList: todoList.filter((todoItem: TodoItemType) => todoItem.id !== deleteTodoItem.id) },
        });
      },
    }
  );

  const [updateTodo] = useMutation(
    UPDATE_IS_DONE_FIELD_OF_TODO_ITEM,
    {
      update(cache, { data: { updateTodoItem } }) {
        const { todoList } = cache.readQuery({ query: GET_TODO_LIST_BY_CATEGORY });
        cache.writeQuery({
          query: GET_TODO_LIST_BY_CATEGORY,
          data: { todoList: findAndReplaceById(todoList, updateTodoItem) },
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

  const handleTodoItemPress = (isDone: boolean) => {
    updateTodo({
      variables: {
        isDone: !isDone,
      },
    });
  };

  if (loading) {
    return <BlockLoader />;
  }

  return (
    <TodoList
      todoList={data.todoListByCategory || []}
      onDeleteTodoItem={handleDeleteTodoItem}
      onEditTodoItem={handleEditTodoItem}
      onTodoItemPress={handleTodoItemPress}
    />
  );
};
