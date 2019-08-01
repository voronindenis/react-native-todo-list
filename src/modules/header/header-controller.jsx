// @flow
import * as React from 'react';
import { Header } from './header';
import { HEADER_MOCKS, CATEGORIES_LIST } from './header-constants';

export const HeaderController = () => {
  return (
    <Header
      counter={HEADER_MOCKS.TASK_COUNTER}
      categories={CATEGORIES_LIST}
    />
  )
}
