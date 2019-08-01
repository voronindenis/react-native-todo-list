// @flow
import * as React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { COLORS_ENUM } from '@/constants/common';
import type { TodoItemType } from '@/hooks/useTodoList';
import { ListItem } from './components/list-item'

type TodoListPropsType = {
  todoList: Array<TodoItemType>,
  onDeleteTodoItem: (index: number) => void,
};

const styles = StyleSheet.create({
  container: {
    flex: 11,
    width: '100%',
    alignItems: 'center',
    backgroundColor: COLORS_ENUM.DEFAULT_BACKGROUND_COLOR,
    paddingTop: 8,
  },
  list: {
    width: '100%',
  },
});

export const TodoList = (props: TodoListPropsType) => (
  <View style={styles.container}>
    <FlatList
      style={styles.list}
      data={props.todoList}
      renderItem={({ item }: TodoItemType, index: number) => (
        <ListItem
          title={item.title}
          category={item.category}
          expirationDate={item.expirationDate}
          onPress={() => props.onDeleteTodoItem(index)}
          isDone={item.isDone}
        />
      )}
    />
  </View>
);
