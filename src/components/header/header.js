// @flow
import * as React from 'react';
import { Header as NuiHeader } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const Header = () => (
  <NuiHeader
    containerStyle={styles.container}
    centerComponent={{ text: 'React Native Todo App', style: { color: '#fff' } }}
  />
);
