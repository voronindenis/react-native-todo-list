// @flow
import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { TaskList } from './task-list';

type TaskListControllerPropsType = {
  componentId: string,
};

export const TaskListController = (props: TaskListControllerPropsType) => {
  // NOTE: [Denis Voronin] this is necessary since when resetting the top component from the stack,
  // the bottom one does not re-render
  const [, update] = React.useState();
  React.useEffect(() => {
    const listener = Navigation.events().registerComponentDidAppearListener(
      () => {
        update(Math.random());
      }
    );
    return () => listener.remove();
  }, []);

  return (
    <TaskList componentId={props.componentId} />
  );
};
