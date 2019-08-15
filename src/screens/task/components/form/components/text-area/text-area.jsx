// @flow
import * as React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { COLORS_ENUM, FONT_SIZES_ENUM } from '../../../../../../constants/common';

const styles = StyleSheet.create({
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
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 16,
    minHeight: 64,
    height: 128,
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
  input: {
    flex: 1,
  },
});

type TextAreaPropsType = {
  label: string,
  numberOfLines: number,
  value: string,
  onChangeText: (value?: string) => void;
};

export const TextArea = (props: TextAreaPropsType) => (
  <View style={styles.field}>
    <Text style={styles.label}>{props.label}</Text>
    <View style={styles.inputWrapper}>
      <TextInput
        multiline={true}
        numberOfLines={props.numberOfLines}
        value={props.value}
        style={styles.input}
        onChangeText={props.onChangeText}
        blurOnSubmit
      />
    </View>
  </View>
);
