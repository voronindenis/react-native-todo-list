// @flow
import * as React from 'react';
import { TopBar } from './top-bar';
import { TOP_BAR_MOCKS, CATEGORIES_LIST } from './top-bar-constants';

export const TobBarController = () => {
  return (
    <TopBar
      counter={TOP_BAR_MOCKS.TASK_COUNTER}
      categories={CATEGORIES_LIST}
    />
  )
}
