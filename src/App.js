/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from '@/components/header';
import { TodoList } from '@/components/todo-list';
import { NewTodo } from '@/components/new-todo';
import { TodoListProvider } from '@/hooks/useTodoList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export const App = () => (
  <TodoListProvider>
    <View style={styles.container}>
      <Header />
      <TodoList />
      <NewTodo />
    </View>
  </TodoListProvider>
);
