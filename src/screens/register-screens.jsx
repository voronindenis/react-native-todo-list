// @flow
import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { todoListReducer, TODO_LIST_MOCK, TodoListProvider } from '@/hooks/useTodoList';
import type {TodoItemType} from '@/hooks/useTodoList';
import { createStore } from '@/store/create-store';
import { TaskList } from './task-list';
import { Task } from './task';

const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql',
});

export function registerScreens() {
  const [getState, dispatch, subscribe] = createStore(todoListReducer, TODO_LIST_MOCK);
  Navigation.registerComponent(
    'TaskList',
    () => (props: {
      componentId: string,
    }) => (
      <ApolloProvider client={client}>
        <TodoListProvider dispatch={dispatch} getState={getState} subscribe={subscribe}>
          <TaskList {...props} />
        </TodoListProvider>
      </ApolloProvider>
    ),
  );
  Navigation.registerComponent(
    'Task',
    () => (props: {
      componentId: string,
      title?: string,
      id?: TodoItemType,
    }) => (
      <ApolloProvider client={client}>
        <TodoListProvider dispatch={dispatch} getState={getState} subscribe={subscribe}>
          <Task {...props} />
        </TodoListProvider>
      </ApolloProvider>
    ),
    );
}
