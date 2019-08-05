// @flow
import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { useOriginTodoListProvider } from '@/hooks/useTodoList';
import { TaskList } from './task-list';
import { Task } from './task';

export function registerScreens() {
  console.log('WHAAAA', useOriginTodoListProvider, useOriginTodoListProvider.length);
  Navigation.registerComponent(
    'TaskList',
    () => useOriginTodoListProvider(TaskList),
  );
  Navigation.registerComponent(
    'Task',
    () => useOriginTodoListProvider(Task),
    );
}
