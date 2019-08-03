// @flow
import * as React from 'react';
import { Form } from './form';

export const FormController = () => {
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
    console.log(value);
    setDate(value);
  };

  const getSignificance = (value: string) => {
    console.log(value);
    setSignificance(value);
  };

  return (
    <Form
      description={description}
      getDate={getDate}
      getSignificance={getSignificance}
      onDescriptionInputChange={handleDescriptionInputChange}
      onTitleInputChange={handleTitleInputChange}
      title={title}
    />
  );
};
