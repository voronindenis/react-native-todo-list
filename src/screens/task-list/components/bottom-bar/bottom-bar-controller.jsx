// @flow
import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { BottomBar } from './bottom-bar';

type BottomBarControllerPropsType = {
  componentId: string,
};

export const BottomBarController = (props: BottomBarControllerPropsType) => {
  const handleAddButtonPress = async () => {
    await Navigation.push(props.componentId, {
      component: {
        name: 'Task',
        passProps: {
          title: 'Add task'
        },
        options: {
          topBar: {
            visible: false,
            height: 0,
          },
        },
      },
    });
  };

  return (
    <BottomBar
      onAddButtonPress={handleAddButtonPress}
    />
  );
};
