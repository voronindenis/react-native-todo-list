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
  getValue?: (value: string) => value,
};

const dateTimeRegExp = /^\d{2}-\d{2}-\d{4} \d{2}:\d{2}$/;

export const DateInput = (props: DateInputPropsType) => {
  const [dateTime, setDateTime] = React.useState(convertDateInstanceToDateTime(new Date()));

  const [date, setDate] = React.useState(new Date());

  const [isOpen, setDatePickerVisible] = React.useState(false);

  React.useEffect(() => {
    if (props.getValue) {
      props.getValue(date);
    }
  }, [props.getValue, date]);

  const handleDateInputChange = (value: string) => {
    if (dateTimeRegExp.test(value)) {
      setDate(new Date(replaceDateToMonths(value)));
    }
    setDateTime(value);
  };

  const handleDateInputFocus = () => {
    setDatePickerVisible(true)
  };

  const handleDateInputBlur = () => {
    setDatePickerVisible(false)
  };

  const handleDatePickerChange = (date: typeof Date) => {
    console.log('handleDatePickerChange', date);
    setDate(date);
    setDateTime(convertDateInstanceToDateTime(date));
  };

  return (
    <>
      <BaseInput
        label={props.label}
        onChangeText={handleDateInputChange}
        onBlur={handleDateInputBlur}
        onFocus={handleDateInputFocus}
        value={dateTime}
        icon={props.icon}
        mask={{ type: 'datetime', format: 'DD-MM-YYYY HH:mm' }}
      />
      {
        isOpen && (
          <View style={styles.datePickerWrapper}>
            <DatePickerIOS
              date={date}
              onDateChange={handleDatePickerChange}
              locale="en"
            />
          </View>
        )
      }
    </>
  );
};
