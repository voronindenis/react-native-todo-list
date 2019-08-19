// @flow
import * as React from 'react';
import { ListItem } from './list-item';
import type { TodoItemType } from '@/hooks/useTodoList';

type ListItemControllerPropsType = {
  item: TodoItemType,
  onDeleteButtonPress: (id: string) => void,
  onEditTodoItem: (id: string) => Promise<void>,
};

export const ListItemController = (props: ListItemControllerPropsType) => {
  const [isClose, setCloseMode] = React.useState(true);

  const handleDeleteButtonPress = (id: string) => {
    setCloseMode(true);
    props.onDeleteButtonPress(id);
  };

  const handleEditButtonPress = (id: string) => {
    setCloseMode(true);
    props.onEditTodoItem(id).catch(e => console.log(e));
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
