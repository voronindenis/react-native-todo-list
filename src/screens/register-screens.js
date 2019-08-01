// @flow
import { Navigation } from 'react-native-navigation';
import { TaskList } from './task-list';
import { Task } from './task';

export function registerScreens() {
  Navigation.registerComponent('TaskList', () => (
    TaskList
  ));
  Navigation.registerComponent('Task', () => Task);
}
