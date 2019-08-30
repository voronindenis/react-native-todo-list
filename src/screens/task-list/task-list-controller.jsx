// @flow
import * as React from 'react';
import { TaskList } from './task-list';

type TaskListControllerPropsType = {
  componentId: string,
};

export const TaskListController = (props: TaskListControllerPropsType) => {
  const [activeCategory, setActiveCategory] = React.useState();
  return (
    <TaskList
      activeCategory={activeCategory}
      componentId={props.componentId}
      setActiveCategory={setActiveCategory}
    />
  );
};
