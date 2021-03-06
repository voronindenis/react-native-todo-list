// @flow
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { TopBar } from './components/top-bar';
import { Form } from './components/form';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

type TaskPropsType = {
  componentId: string,
  title?: string,
  id?: string,
};

export const Task = (props: TaskPropsType) => (
  <View style={styles.container}>
    <TopBar
      componentId={props.componentId}
      title={props.title}
    />
    <Form
      componentId={props.componentId}
      id={props.id}
    />
  </View>
);
