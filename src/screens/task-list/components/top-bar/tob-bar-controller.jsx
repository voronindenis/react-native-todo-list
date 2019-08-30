// @flow
import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { BlockLoader } from '@/components/block-loader';
import { TopBar } from './top-bar';
import { GET_CATEGORY_LIST, GET_TASK_LIST_ITEMS_COUNT } from './top-bar-queries';
import type { CategoryItemType } from '../../task-list-types';

type TobBarControllerPropsType = {
  setActiveCategory: (category: CategoryItemType) => void,
};

export const TobBarController = (props: TobBarControllerPropsType) => {
  const { loading: categoriesLoading, data: { categoriesList } } = useQuery(GET_CATEGORY_LIST);
  const { loading: taskCountLoading, data: { todoItemsCount } } = useQuery(GET_TASK_LIST_ITEMS_COUNT);

  const handleCategoryItemPress = (category: CategoryItemType) => {
    props.setActiveCategory(category);
  };

  if (categoriesLoading || taskCountLoading) {
    return <BlockLoader />;
  }

  return (
    <TopBar
      counter={todoItemsCount}
      categories={categoriesList}
      onCategoryItemPress={handleCategoryItemPress}
    />
  );
};
