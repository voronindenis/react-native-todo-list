/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Button, Input, ListItem,
} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

type TodoItem = {
  text: string,
};

export const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [list, changeList] = useState([]);

  const handleInputChange = (value: string) => setInputValue(value);

  const handleAddTodoItem = () => changeList([...list, inputValue]);

  const handleDeleteTodoItem = () => changeList([]);

  return (
    <View style={styles.container}>
      {
        list.map((item:TodoItem) => (
          <ListItem
            key={item.text}
            title={item.text}
            rightIcon={{
              name: 'delete',
              color: '#517fa4',
              onPress: handleDeleteTodoItem,
            }}
          />
        ))
      }
      <Text>{inputValue}</Text>
      <Input
        placeholder="Enter what you should do"
        value={inputValue}
        onChangeText={handleInputChange}
      />
      <Button
        title="Add Todo"
        onPress={handleAddTodoItem}
      />
    </View>
  );
};
