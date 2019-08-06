// @flow
import * as React from 'react';
import { Navigation } from 'react-native-navigation';
import { useTodoList, addTodoItem } from '@/hooks/useTodoList';
import { convertDateInstanceToDate } from '@/utils/date-utils';
import { Form } from './form';

type FormControllerPropsType = {
  componentId: string,
};

export const FormController = (props: FormControllerPropsType) => {
  const [title, setTitle] = React.useState('');

  const [date, setDate] = React.useState('');

  const [description, setDescription] = React.useState('');

  const [significance, setSignificance] = React.useState('');

  const handleTitleInputChange = (value: string) => {
    setTitle(value)
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
    dispatch(addTodoItem({
      key: Math.random().toString(), // TODO: [Denis Voronin] replace this on Uuid
      title,
      category: significance,
      expirationDate: convertDateInstanceToDate(date),
      isDone: false,
    }));
    await Navigation.pop(props.componentId, { passProps: { needUpdate: true } });
  }, [dispatch, title, significance, date, props.componentId]);

  return (
    <Form
      description={description}
      getDate={getDate}
      getSignificance={getSignificance}
      onAddButtonPress={handleAddButtonPress}
      onDescriptionInputChange={handleDescriptionInputChange}
      onTitleInputChange={handleTitleInputChange}
      title={title}
    />
  );
};
