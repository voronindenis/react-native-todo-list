// @flow
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS_ENUM } from '@/constants/common';
import { IconButton } from '@/components/icon-button';
import { TextInput } from './components/text-input';
import { DateInput } from './components/date-input';
import { TextArea } from './components/text-area';
import { SelectInput } from './components/select-input';

const styles = StyleSheet.create({
  container: {
    flex: 11,
    width: '100%',
    backgroundColor: COLORS_ENUM.DEFAULT_BACKGROUND_COLOR,
  },
  addButtonWrapper: {
    width: '100%',
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

type FormPropsType = {
  description: string,
  dateFromItem: ?string,
  getDate: (value: Date) => void,
  getSignificance: (value: string) => void,
  isEditMode: boolean,
  onAddButtonPress: () => Promise<void>,
  onEditButtonPress: () => Promise<void>,
  onDescriptionInputChange: (value: string) => void,
  onTitleInputChange: (value: string) => void,
  significance: string,
  title: string,
  categories: Array<{ id: string, text: string }>,
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
        initialDate={props.dateFromItem}
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
        options={props.categories}
        initialValue={props.significance}
      />
      <View style={styles.addButtonWrapper}>
        <IconButton
          iconName={props.isEditMode ? "pencil-alt" : "plus"}
          onPress={props.isEditMode ? props.onEditButtonPress : props.onAddButtonPress}
        />
      </View>
    </View>
  </>
);
