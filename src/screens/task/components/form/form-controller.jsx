// @flow
import * as React from 'react';
import uuidv4 from 'uuid/v4';
import { Navigation } from 'react-native-navigation';
import { useTodoList, addTodoItem, editTodoItem } from '@/hooks/useTodoList';
import type { TodoItemType } from '@/hooks/useTodoList';
import { convertDateInstanceToDateTime } from '@/utils/date-utils';
import { Form } from './form';

type FormControllerPropsType = {
  componentId: string,
  item: ?TodoItemType,
};

export const FormController = (props: FormControllerPropsType) => {
  const [isEditMode] = React.useState(!!props.item);

  const [title, setTitle] = React.useState((props.item && props.item.title) || '');

  const [date, setDate] = React.useState();

  const [description, setDescription] = React.useState((props.item && props.item.description) || '');

  const [significance, setSignificance] = React.useState((props.item && props.item.category) || '');

  const handleTitleInputChange = (value: string) => {
    setTitle(value);
  };

  const handleDescriptionInputChange = (value: string) => {
    setDescription(value);
  };

  const getDate = (value: string) => {
    setDate(value);
  };

  const getSignificance = (value: string) => {
    setSignificance(value);
  };

  const [, dispatch] = useTodoList();

  const handleAddButtonPress = React.useCallback(async () => {
    await dispatch(addTodoItem({
      key: uuidv4(),
      title,
      description,
      category: significance,
      expirationDate: convertDateInstanceToDateTime(date),
      isDone: false,
    }));
    await Navigation.pop(props.componentId);
  }, [dispatch, title, significance, date, description, props.componentId]);

  const handleEditButtonPress = React.useCallback(async () => {
    dispatch(editTodoItem({
      ...props.item,
      title,
      description,
      category: significance,
      expirationDate: convertDateInstanceToDateTime(date),
    }));
    await Navigation.pop(props.componentId);
  }, [dispatch, title, significance, date, description, props.componentId]);

  return (
    <Form
      description={description}
      dateFromItem={(props.item && props.item.expirationDate) || undefined}
      getDate={getDate}
      getSignificance={getSignificance}
      isEditMode={isEditMode}
      onAddButtonPress={handleAddButtonPress}
      onEditButtonPress={handleEditButtonPress}
      onDescriptionInputChange={handleDescriptionInputChange}
      onTitleInputChange={handleTitleInputChange}
      significance={significance}
      title={title}
    />
  );
};
