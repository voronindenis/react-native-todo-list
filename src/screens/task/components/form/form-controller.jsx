// @flow
import * as React from 'react';
import { Form } from './form';

export const FormController = () => {
  const [title, setTitle] = React.useState('');

  const [date, setDate] = React.useState(new Date());

  const [isOpen, setDatePickerVisible] = React.useState(false);

  const [description, setDescription] = React.useState('');

  const handleTitleInputChange = (value: string) => {
    setTitle(value)
  };

  const handleDateInputChange = (value: string) => {
    setDate(value);
  };

  const handleDateInputFocus = () => {
    setDatePickerVisible(true)
  };

  const handleDateInputBlur = () => {
    setDatePickerVisible(false)
  };

  const handleDescriptionInputChange = (value: string) => {
    setDescription(value);
  };

  return (
    <Form
      date={date}
      description={description}
      isOpen={isOpen}
      onDateInputChange={handleDateInputChange}
      onDateInputFocus={handleDateInputFocus}
      onDateInputBlur={handleDateInputBlur}
      onDescriptionInputChange={handleDescriptionInputChange}
      onTitleInputChange={handleTitleInputChange}
      title={title}
    />
  );
};
