// @flow
import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Text } from 'react-native';
import { TopBar } from './top-bar';
import { GET_CATEGORY_LIST, GET_TASK_LIST_ITEMS_COUNT } from './top-bar-queries';

export const TobBarController = () => {
  const { loading: categoriesLoading, data: { categoriesList } } = useQuery(GET_CATEGORY_LIST);
  const { loading: taskCountLoading, data: { todoItemsCount } } = useQuery(GET_TASK_LIST_ITEMS_COUNT);

  if (categoriesLoading || taskCountLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <TopBar
      counter={todoItemsCount}
      categories={categoriesList}
    />
  );
};
