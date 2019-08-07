// @flow
import * as React from 'react';
import { ListItem } from './list-item';
import type { TodoItemType } from '@/hooks/useTodoList';

type ListItemControllerPropsType = {
  item: TodoItemType,
  onDeleteButtonPress: (key: string) => void,
  onEditTodoItem: (todoItem: TodoItemType) => void,
};

export const ListItemController = (props: ListItemControllerPropsType) => {
  const [isClose, setCloseMode] = React.useState(true);

  const handleDeleteButtonPress = (key: string) => {
    setCloseMode(true);
    props.onDeleteButtonPress(key);
  };

  const handleEditButtonPress = (todoItem: TodoItemType) => {
    setCloseMode(true);
    props.onEditTodoItem(todoItem);
  };

  return (
    <ListItem
      item={props.item}
      onDeleteButtonPress={handleDeleteButtonPress}
      onEditTodoItem={handleEditButtonPress}
      isClose={isClose}
    />
  )
};
