// @flow
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem } from 'react-native-elements';

type TodoListPropsType = {
  todoList: Array<{ text: string }>,
  onDeleteTodoItem: (index: number) => void,
};

const styles = StyleSheet.create({
  container: {
    flex: 7,
    width: '100%',
  },
  listItem: {},
});

export const TodoList = (props: TodoListPropsType) => (
  <View style={styles.container}>
    {
      props.todoList.map((item: { text: string}, index: number) => (
        <ListItem
          style={styles.listItem}
          key={item.text}
          title={item.text}
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
