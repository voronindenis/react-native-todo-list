// @flow
import * as React from 'react';
import { TopBar } from './top-bar';
import { gql } from "apollo-boost";
import { TOP_BAR_MOCKS, CATEGORIES_LIST } from './top-bar-constants';

const GET_CATEGORY_LIST = gql`
  query getCategoriesList {
    categoriesList {
      id
      text
    }
  }
`;

export const TobBarController = () => {
  return (
    <TopBar
      counter={TOP_BAR_MOCKS.TASK_COUNTER}
      categories={CATEGORIES_LIST}
    />
  )
}
