// @flow
import * as React from 'react';
import {
  StyleSheet, View, Text, TextInput, DatePickerIOS, Picker,
} from 'react-native';
import { COLORS_ENUM, FONT_SIZES_ENUM } from '@/constants/common';
import { convertDateInstanceToDateTime } from '@/utils/date-utils';
import { CATEGORIES_LIST } from './form-constants';
import type { CategoryItemType } from './form-types';

const styles = StyleSheet.create({
  container: {
    flex: 11,
    width: '100%',
    backgroundColor: COLORS_ENUM.DEFAULT_BACKGROUND_COLOR,
    padding: 16,
  },
  field: {
    flex: 1,
    padding: 8,
  },
  label: {
    color: COLORS_ENUM.BLACK_COLOR,
    fontSize: FONT_SIZES_ENUM.BASE_FONT_SIZE,
    fontFamily: "Montserrat-Bold",
    margin: 8,
  },
  input: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 16,
    minHeight: 64,
    maxHeight: 64,
    backgroundColor: COLORS_ENUM.WHITE_COLOR,
    borderRadius: 16,
    shadowColor: COLORS_ENUM.SHADOW_COLOR,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 1,
    margin: 8,
    padding: 8,
    fontSize: FONT_SIZES_ENUM.INPUT_FONT_SIZE,
    fontFamily: "Montserrat-Medium",
  },
  textArea: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 16,
    minHeight: 64,
    backgroundColor: COLORS_ENUM.WHITE_COLOR,
    borderRadius: 16,
    shadowColor: COLORS_ENUM.SHADOW_COLOR,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 1,
    margin: 8,
    padding: 8,
    fontSize: FONT_SIZES_ENUM.INPUT_FONT_SIZE,
    fontFamily: "Montserrat-Medium",
  },
  datePickerWrapper: {
    backgroundColor: COLORS_ENUM.DEFAULT_BACKGROUND_COLOR,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 240,
  },
});

type FormPropsType = {
  date: string,
  description: string,
  isOpen: boolean,
  onDateInputChange: (value: string) => void,
  onDateInputFocus: () => void,
  onDateInputBlur: () => void,
  onDescriptionInputChange: (value: string) => void,
  onTitleInputChange: (value: string) => void,
  title: string
};

export const Form = (props: FormPropsType) => (
  <>
    <View style={styles.container}>
      <View style={styles.field}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          value={props.title}
          style={styles.input}
          onChangeText={props.onTitleInputChange}
        />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Expiration date</Text>
        <TextInput
          style={styles.input}
          value={convertDateInstanceToDateTime(props.date)}
          caretHidden={props.isOpen}
          onFocus={props.onDateInputFocus}
          onBlur={props.onDateInputBlur}
        />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          multiline={true}
          numberOfLines={6}
          value={props.description}
          style={styles.textArea}
          onChangeText={props.onDescriptionInputChange}
        />
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Significance</Text>
        <Picker
          style={{height: 50, width: 100}}
        >
          {
            CATEGORIES_LIST.map((category: CategoryItemType) => (
              <Picker.Item key={category.id} label={category.text} value={category.text} />
            ))
          }
        </Picker>
      </View>
    </View>
    {
      props.isOpen && (
        <View style={styles.datePickerWrapper}>
          <DatePickerIOS
            date={props.date}
            onDateChange={props.onDateInputChange}
          />
        </View>
      )
    }
  </>
);
