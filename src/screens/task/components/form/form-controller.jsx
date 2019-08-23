// @flow
import * as React from 'react';
import { Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { convertDateInstanceToDateTime } from '@/utils/date-utils';
import { findAndReplaceById } from '@/utils/find-and-replace-by-id';
import { Form } from './form';

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
      category {
        id,
        text,
      },
      description,
      expirationDate,
      isDone,
    }
  }
`;

const CREATE_TODO_ITEM = gql`
  mutation addTodoItem(
    $title: String!,
    $categoryId: ID,
    $description: String!,
    $expirationDate: String!,
    $isDone: Boolean!
  ) {
    addTodoItem(
      title: $title,
      categoryId: $categoryId
      description: $description,
      expirationDate: $expirationDate,
      isDone: $isDone
    ) {
      id,
      title,
      category {
        id,
        text,
      },
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

const GET_CATEGORY_LIST = gql`
  query getCategoriesList {
    categoriesList {
      id
      text
    }
  }
`;

export const FormController = (props: FormControllerPropsType) => {
  const { data: categories } = useQuery(GET_CATEGORY_LIST);

  const [isLoaded, setLoadedStatus] = React.useState(false);
  const [isEditMode] = React.useState(!!props.id);
  let todoItem = {};
  if (isEditMode) {
    const { data: todo } = useQuery(GET_TODO_ITEM, { variables: { id: props.id } });
    todoItem = todo;
  }

  const [title, setTitle] = React.useState('');
  const [date, setDate] = React.useState();
  const [description, setDescription] = React.useState('');
  const [significance, setSignificance] = React.useState('');

  React.useEffect(() => {
    if (isEditMode && todoItem.todoItem) {
      setTitle(todoItem.todoItem.title);
      setDescription(todoItem.todoItem.description);
      setSignificance(todoItem.todoItem.category.id);
      setLoadedStatus(true);
    }
    if (!isEditMode && categories.categoriesList) {
      setLoadedStatus(true);
    }
  }, [todoItem, categories]);

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

  const [ addTodoItem ] = useMutation(
    CREATE_TODO_ITEM,
    {
      update(cache, {data: { addTodoItem }}) {
        const { todoList } = cache.readQuery({ query: GET_TODO_LIST });
        cache.writeQuery({
          query: GET_TODO_LIST,
          data: { todoList: todoList.concat(addTodoItem) },
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

  const handleAddButtonPress = React.useCallback(async () => {
    addTodoItem({ variables: {
        title,
        description,
        categoryId: significance,
        expirationDate: convertDateInstanceToDateTime(date),
        isDone: false,
      } });
    await Navigation.pop(props.componentId);
  }, [title, significance, date, description, props.componentId]);

  const handleEditButtonPress = React.useCallback(async () => {
    updateTodoItem({ variables: {
      ...todoItem.todoItem,
      title,
      description,
      categoryId: significance,
      expirationDate: convertDateInstanceToDateTime(date),
    } });
    await Navigation.pop(props.componentId);
  }, [title, significance, date, description, props.componentId]);

  if (!isLoaded) {
    return <Text>Loading...</Text>
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
