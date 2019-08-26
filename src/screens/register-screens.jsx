// @flow
import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { TaskList } from './task-list';
import { Task } from './task';

const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql',
});

export function registerScreens() {
  Navigation.registerComponent(
    'TaskList',
    () => (props: {
      componentId: string,
    }) => (
      <ApolloProvider client={client}>
        <TaskList {...props} />
      </ApolloProvider>
    ),
  );
  Navigation.registerComponent(
    'Task',
    () => (props: {
      componentId: string,
      title?: string,
      id?: string,
    }) => (
      <ApolloProvider client={client}>
        <Task {...props} />
      </ApolloProvider>
    ),
  );
}
