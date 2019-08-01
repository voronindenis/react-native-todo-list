/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import * as React from 'react';
import { registerScreens } from '@/screens/screens';
import { TaskList } from '@/screens/task-list';
import { TodoListProvider } from '@/hooks/useTodoList';

registerScreens();

export const App = () => (
  <TodoListProvider>
    <TaskList />
  </TodoListProvider>
);
