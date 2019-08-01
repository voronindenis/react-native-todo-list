// @flow
import { Navigation } from 'react-native-navigation';
import { TaskList } from './task-list';

export function registerScreens() {
  Navigation.registerComponent('Home', () => TaskList);
}
