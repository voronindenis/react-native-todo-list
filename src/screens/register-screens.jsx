// @flow
import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { todoListReducer, TODO_LIST_MOCK, TodoListProvider } from '@/hooks/useTodoList';
import { createStore } from '@/utils/create-store';
import { TaskList } from './task-list';
import { Task } from './task';

export function registerScreens() {
  const [getState, dispatch] = createStore(todoListReducer, TODO_LIST_MOCK);
  Navigation.registerComponent(
    'TaskList',
    () => (props) => (
      <TodoListProvider dispatch={dispatch} getState={getState}>
        <TaskList {...props} />
      </TodoListProvider>
    ),
    () => TaskList,
  );
  Navigation.registerComponent(
    'Task',
    () => (props) => (
      <TodoListProvider dispatch={dispatch} getState={getState}>
        <Task {...props} />
      </TodoListProvider>
    ),
    () => Task,
    );
}
