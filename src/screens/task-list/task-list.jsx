// @flow
import * as React from 'react';
import { StyleSheet, View } from "react-native";
import { Header } from '@/modules/header';
import { TodoList } from '@/modules/todo-list';
import { NewTodo } from '@/modules/new-todo';
import {TodoListProvider} from '@/hooks/useTodoList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

type TaskListPropsType = {
  componentId: string,
};

export const TaskList = (props: TaskListPropsType) => (
  <TodoListProvider>
    <View style={styles.container}>
      <Header />
      <TodoList />
      <NewTodo componentId={props.componentId} />
    </View>
  </TodoListProvider>
);
