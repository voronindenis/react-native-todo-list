// @flow
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

type TodoListPropsType = {
  todoList: Array<{ text: string }>,
  onDeleteTodoItem: (index: number) => void,
};

const styles = StyleSheet.create({
  listItem: {
    width: '80%',
  },
});

export const TodoList = (props: TodoListPropsType) => (
  <>
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
  </>
);
