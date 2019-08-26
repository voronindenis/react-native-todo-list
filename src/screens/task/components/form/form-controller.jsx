// @flow
import * as React from 'react';
import { Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { convertDateInstanceToDateTime } from '@/utils/date-utils';
import { findAndReplaceById } from '@/utils/find-and-replace-by-id';
import { GET_TODO_ITEM, GET_TODO_LIST, GET_CATEGORY_LIST } from './form-queries';
import { UPDATE_TODO_ITEM, CREATE_TODO_ITEM } from './form-mutattions';
import { Form } from './form';

type FormControllerPropsType = {
  componentId: string,
  id: ?string,
};

export const FormController = (props: FormControllerPropsType) => {
  const { data: categories } = useQuery(GET_CATEGORY_LIST);

  const [isLoaded, setLoadedStatus] = React.useState(false);
  const [isEditMode] = React.useState(!!props.id);

  const { data: todoItem } = useQuery(GET_TODO_ITEM, { variables: { id: props.id }, skip: !props.id });

  const [title, setTitle] = React.useState('');
  const [date, setDate] = React.useState();
  const [description, setDescription] = React.useState('');
  const [significance, setSignificance] = React.useState('');

  React.useEffect(() => {
    if (isEditMode) {
      setTitle(todoItem.todoItem.title);
      setDescription(todoItem.todoItem.description);
      setSignificance(todoItem.todoItem.category.id);
      setLoadedStatus(true);
    }
    if (!isEditMode && categories.categoriesList) {
      setLoadedStatus(true);
    }
  }, [isEditMode, todoItem, categories]);

  const [updateTodo] = useMutation(
    UPDATE_TODO_ITEM,
    {
      update(cache, { data: { updateTodoItem } }) {
        const { todoList } = cache.readQuery({ query: GET_TODO_LIST });
        cache.writeQuery({
          query: GET_TODO_LIST,
          data: { todoList: findAndReplaceById(todoList, updateTodoItem) },
        });
      },
    }
  );

  const [addTodo] = useMutation(
    CREATE_TODO_ITEM,
    {
      update(cache, { data: { addTodoItem } }) {
        const { todoList } = cache.readQuery({ query: GET_TODO_LIST });
        cache.writeQuery({
          query: GET_TODO_LIST,
          data: { todoList: todoList.concat(addTodoItem) },
        });
      },
    }
  );

  const handleTitleInputChange = (value: string) => {
    setTitle(value);
  };

  const handleDescriptionInputChange = (value: string) => {
    setDescription(value);
  };

  const getDate = (value: Date) => {
    setDate(value);
  };

  const getSignificance = (value: string) => {
    setSignificance(value);
  };

  const handleAddButtonPress = React.useCallback(async () => {
    addTodo({
      variables: {
        title,
        description,
        categoryId: significance,
        expirationDate: convertDateInstanceToDateTime(date),
        isDone: false,
      },
    });
    await Navigation.pop(props.componentId);
  }, [addTodo, title, description, significance, date, props.componentId]);

  const handleEditButtonPress = React.useCallback(async () => {
    updateTodo({
      variables: {
        ...todoItem.todoItem,
        title,
        description,
        categoryId: significance,
        expirationDate: convertDateInstanceToDateTime(date),
      },
    });
    await Navigation.pop(props.componentId);
  }, [updateTodo, todoItem.todoItem, title, description, significance, date, props.componentId]);

  if (!isLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Form
      description={description}
      dateFromItem={(todoItem.todoItem && todoItem.todoItem.expirationDate) || undefined}
      getDate={getDate}
      getSignificance={getSignificance}
      isEditMode={isEditMode}
      onAddButtonPress={handleAddButtonPress}
      onEditButtonPress={handleEditButtonPress}
      onDescriptionInputChange={handleDescriptionInputChange}
      onTitleInputChange={handleTitleInputChange}
      significance={significance}
      title={title}
      categories={categories.categoriesList}
    />
  );
};
