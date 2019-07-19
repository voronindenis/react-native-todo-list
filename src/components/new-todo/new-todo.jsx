// @flow
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input } from 'react-native-elements';

type NewTodoPropsType = {
  inputValue: string,
  handleInputChange: (newValue: string) => void,
  handleAddTodoItem: (event: Event) => void,
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    width: '100%',
  },
  addButton: {
    width: '60%',
    marginTop: '5%',
    marginBottom: '5%',
  },
});

export const NewTodo = (props: NewTodoPropsType) => (
  <View style={styles.container}>
    <Input
      placeholder="Enter what you should do"
      value={props.inputValue}
      onChangeText={props.handleInputChange}
    />
    <Button
      style={styles.addButton}
      title="Add Todo"
      onPress={props.handleAddTodoItem}
    />
  </View>
);
