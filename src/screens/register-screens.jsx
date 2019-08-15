// @flow
import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { todoListReducer, TODO_LIST_MOCK, TodoListProvider } from '@/hooks/useTodoList';
import type {TodoItemType} from '@/hooks/useTodoList';
import { createStore } from '@/store/create-store';
import { TaskList } from './task-list';
import { Task } from './task';

export function registerScreens() {
  const [getState, dispatch, subscribe] = createStore(todoListReducer, TODO_LIST_MOCK);
  Navigation.registerComponent(
    'TaskList',
    () => (props: {
      componentId: string,
    }) => (
      <TodoListProvider dispatch={dispatch} getState={getState} subscribe={subscribe}>
        <TaskList {...props} />
      </TodoListProvider>
    ),
  );
  Navigation.registerComponent(
    'Task',
    () => (props: {
      componentId: string,
      title?: string,
      item?: TodoItemType,
    }) => (
      <TodoListProvider dispatch={dispatch} getState={getState} subscribe={subscribe}>
        <Task {...props} />
      </TodoListProvider>
    ),
    );
}
