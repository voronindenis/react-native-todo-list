// @flow
import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { TopBar } from './top-bar';

type TopBarControllerPropsType = {
  title?: string,
  componentId: string,
};

export const TopBarController = (props: TopBarControllerPropsType) => {
  const handleBackButtonPress = async () => {
    await Navigation.pop(props.componentId);
  };

  const handleMenuButtonPress = () => undefined;

  return (
    <TopBar
      onBackButtonPress={handleBackButtonPress}
      onMenuButtonPress={handleMenuButtonPress}
      title={props.title}
    />
  );
};
