// @flow
import * as React from 'react';
import { StyleSheet, View } from "react-native";
import { TopBar } from './components/top-bar';
import { TodoList } from './components/todo-list';
import { BottomBar } from './components/bottom-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

type TaskListPropsType = {
  componentId: string,
};

export const TaskList = (props: TaskListPropsType) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <TopBar />
      <TodoList />
      <BottomBar componentId={props.componentId} />
    </View>
  );
}
