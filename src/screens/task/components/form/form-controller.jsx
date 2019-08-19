// @flow
import * as React from 'react';
import uuidv4 from 'uuid/v4';
import { Navigation } from 'react-native-navigation';
import {useMutation, useQuery} from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { useTodoList, addTodoItem } from '@/hooks/useTodoList';
import { convertDateInstanceToDateTime } from '@/utils/date-utils';
import { findAndReplaceById } from '@/utils/find-and-replace-by-id';
import { Form } from './form';
import type {TodoItemType} from '@/hooks/useTodoList';

type FormControllerPropsType = {
  componentId: string,
  id: ?string,
};

const GET_TODO_ITEM = gql`
  query getTodoItem($id: ID!) {
    todoItem(id: $id) {
      id
      title
      category {
        id
        text
      }
      description
      expirationDate
      isDone
    }
  }
`;

const UPDATE_TODO_ITEM = gql`
  mutation updateTodoItem(
    $id: ID,
    $title: String!,
    $categoryId: ID,
    $description: String!,
    $expirationDate: String!,
    $isDone: Boolean!
  ) {
    updateTodoItem(
      id: $id,
      title: $title,
      categoryId: $categoryId
      description: $description,
      expirationDate: $expirationDate,
      isDone: $isDone
    ) {
      id,
      title,
      category,
      description,
      expirationDate,
      isDone,
    }
  }
`;

const GET_TODO_LIST = gql`
  query getTodoList {
    todoList {
      id
      title
      category {
        id
        text
      }
      description
      expirationDate
      isDone
    }
  }
`;

export const FormController = (props: FormControllerPropsType) => {
  console.log(props);
  const { loading, error, data } = useQuery(GET_TODO_ITEM, { variables: { id: props.id } });
  console.log(data);

  const [isEditMode] = React.useState(!!props.id);

  const [title, setTitle] = React.useState('');

  const [date, setDate] = React.useState();

  const [description, setDescription] = React.useState('');

  const [significance, setSignificance] = React.useState('');

  React.useEffect(() => {
    if (data.todoItem) {
      setTitle(data.todoItem.title);
      setDescription(data.todoItem.description);
      setSignificance(data.todoItem.category.text);
    }
  }, [data]);

  const [ updateTodoItem ] = useMutation(
    UPDATE_TODO_ITEM,
    {
      update(cache, {data: { updateTodoItem }}) {
        const { todoList } = cache.readQuery({ query: GET_TODO_LIST });
        cache.writeQuery({
          query: GET_TODO_LIST,
          data: { todoList: findAndReplaceById(todoList, updateTodoItem) },
        });
      }
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
    updateTodoItem({ variables: {
      ...data.todoItem,
      title,
      description,
      category: significance,
      expirationDate: convertDateInstanceToDateTime(date),
    } });
    await Navigation.pop(props.componentId);
  }, [title, significance, date, description, props.componentId]);

  return (
    <Form
      description={description}
      dateFromItem={(data.todoItem && data.todoItem.expirationDate) || undefined}
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
