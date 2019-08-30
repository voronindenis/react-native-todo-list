// @flow
import * as React from 'react';
import {
  StyleSheet, View, FlatList, TouchableWithoutFeedback,
} from 'react-native';
import { COLORS_ENUM } from '@/constants/common';
import type { TodoItemType } from './todo-list-types';
import { ListItem } from './components/list-item';

type TodoListPropsType = {
  todoList: Array<TodoItemType>,
  onDeleteTodoItem: (id: string) => void,
  onEditTodoItem: (id: string) => Promise<void>,
  onTodoItemPress: (isDone: boolean) => void,
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
      renderItem={({ item }: { item: TodoItemType }) => (
        <TouchableWithoutFeedback
          onPress={() => props.onTodoItemPress(item.isDone)}
        >
          <ListItem
            item={item}
            onDeleteButtonPress={props.onDeleteTodoItem}
            onEditTodoItem={props.onEditTodoItem}
          />
        </TouchableWithoutFeedback>
      )}
      keyExtractor={(item: TodoItemType) => item.id}
    />
  </View>
);
