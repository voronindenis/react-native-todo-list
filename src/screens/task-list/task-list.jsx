// @flow
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { TopBar } from './components/top-bar';
import { TodoList } from './components/todo-list';
import { BottomBar } from './components/bottom-bar';
import type { CategoryItemType } from './task-list-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

type TaskListPropsType = {
  activeCategory: CategoryItemType | void,
  componentId: string,
  setActiveCategory: (category: CategoryItemType) => void,
};

export const TaskList = (props: TaskListPropsType) => (
  <View style={styles.container}>
    <TopBar setActiveCategory={props.setActiveCategory} />
    <TodoList componentId={props.componentId} activeCategory={props.activeCategory} />
    <BottomBar componentId={props.componentId} />
  </View>
);
