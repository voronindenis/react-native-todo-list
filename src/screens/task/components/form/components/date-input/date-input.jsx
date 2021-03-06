// @flow
import * as React from 'react';
import { DatePickerIOS, View, StyleSheet } from 'react-native';
import { convertDateInstanceToDateTime, replaceDateToMonths } from '@/utils/date-utils';
import { COLORS_ENUM } from '@/constants/common';
import { BaseInput } from '../base-input';

const styles = StyleSheet.create({
  datePickerWrapper: {
    backgroundColor: COLORS_ENUM.DEFAULT_BACKGROUND_COLOR,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 240,
    zIndex: 10,
  },
});

type DateInputPropsType = {
  label: string,
  icon?: string,
  initialDate?: ?string,
  getValue: (value: Date) => void,
};

export const DateInput = (props: DateInputPropsType) => {
  const [dateTime, setDateTime] = React.useState(
    props.initialDate
      ? props.initialDate
      : convertDateInstanceToDateTime(new Date())
  );

  const [date, setDate] = React.useState(
    props.initialDate
      ? new Date(replaceDateToMonths(props.initialDate))
      : new Date()
  );

  const [isOpen, setDatePickerVisible] = React.useState(false);

  const handleDatePickerChange = (dateValue: Date) => {
    setDate(dateValue);
    setDateTime(convertDateInstanceToDateTime(dateValue));
    props.getValue(dateValue);
    setDatePickerVisible(!isOpen);
  };

  const handlePickerPress = () => {
    setDatePickerVisible(!isOpen);
  };

  return (
    <>
      <BaseInput
        label={props.label}
        value={dateTime}
        icon={props.icon}
        picker
        onPickerPress={handlePickerPress}
      />
      {
        isOpen && (
          <View style={styles.datePickerWrapper}>
            <DatePickerIOS
              date={date}
              onDateChange={handleDatePickerChange}
              locale="en"
              returnKeyType="done"
            />
          </View>
        )
      }
    </>
  );
};
