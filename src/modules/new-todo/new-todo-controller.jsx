// @flow
import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { NewTodo } from './new-todo';

type NewTodoControllerPropsType = {
  componentId: string,
};

export const NewTodoController = (props: NewTodoControllerPropsType) => {
  const handleAddButtonPress = async () => {
    console.log('work', props);
    await Navigation.push(props.componentId, {
      component: {
        name: 'Task',
      },
    });
  };

  return (
    <NewTodo
      onAddButtonPress={handleAddButtonPress}
    />
  );
};
