// @flow
import * as React from 'react';
import { Header as NuiHeader } from 'react-native-elements';

export const Header = () => (
  <NuiHeader
    centerComponent={{ text: 'React Native Todo App', style: { color: '#fff' } }}
  />
);
