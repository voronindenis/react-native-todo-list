// @flow
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import type { TodoItemType } from '@/hooks/useTodoList';

type TodoListPropsType = {
  todoList: Array<TodoItemType>,
  onDeleteTodoItem: (index: number) => void,
};

const styles = StyleSheet.create({
  container: {
    flex: 8,
    width: '100%',
  },
  listItem: {},
});

export const TodoList = (props: TodoListPropsType) => (
  <View style={styles.container}>
    {
      props.todoList.map((item: TodoItemType, index: number) => (
        <ListItem
          style={styles.listItem}
          key={item.id}
          title={item.title}
          rightIcon={{
            name: 'delete',
            color: '#517fa4',
            onPress: () => props.onDeleteTodoItem(index),
          }}
        />
      ))
    }
  </View>
);
