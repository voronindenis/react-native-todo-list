// @flow
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS_ENUM, FONT_SIZES_ENUM } from '@/constants/common';
import { TextInput } from '@/components/inputs/text-input';
import { DateInput } from '@/components/inputs/date-input';
import { TextArea } from '@/components/inputs/text-area';
import { SelectInput } from '@/components/inputs/select-input';
import { CATEGORIES_LIST } from './form-constants';

const styles = StyleSheet.create({
  container: {
    flex: 11,
    width: '100%',
    backgroundColor: COLORS_ENUM.DEFAULT_BACKGROUND_COLOR,
  },
});

type FormPropsType = {
  description: string,
  getDate: (value: string) => void,
  getSignificance: (value: string) => void,
  onDescriptionInputChange: (value: string) => void,
  onTitleInputChange: (value: string) => void,
  title: string
};

export const Form = (props: FormPropsType) => (
  <>
    <View style={styles.container}>
      <TextInput
        label="Title"
        value={props.title}
        onChangeText={props.onTitleInputChange}
      />
      <DateInput
        label="Expiration date"
        icon="clock"
        getValue={props.getDate}
      />
      <TextArea
        label="Description"
        numberOfLines={6}
        value={props.description}
        onChangeText={props.onDescriptionInputChange}
      />
      <SelectInput
        label="Significance"
        getValue={props.getSignificance}
        options={CATEGORIES_LIST}
      />
    </View>
  </>
);
