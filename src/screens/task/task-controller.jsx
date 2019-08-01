// @flow
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export const TaskController = () => (
  <View style={styles.container}>
    <Text>
      Test
    </Text>
  </View>
);
