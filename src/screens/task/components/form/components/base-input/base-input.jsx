// @flow
import * as React from 'react';
import {
  StyleSheet, Text, TextInput, View, TouchableWithoutFeedback,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS_ENUM, FONT_SIZES_ENUM } from '@/constants/common';

const styles = StyleSheet.create({
  field: {
    flex: 1,
    padding: 8,
  },
  label: {
    color: COLORS_ENUM.BLACK_COLOR,
    fontSize: FONT_SIZES_ENUM.BASE_FONT_SIZE,
    fontFamily: 'Montserrat-Bold',
    margin: 8,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    minHeight: 64,
    maxHeight: 64,
    backgroundColor: COLORS_ENUM.WHITE_COLOR,
    borderRadius: 16,
    shadowColor: COLORS_ENUM.SHADOW_COLOR,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 1,
    margin: 8,
    paddingHorizontal: 24,
    fontSize: FONT_SIZES_ENUM.INPUT_FONT_SIZE,
    fontFamily: 'Montserrat-Medium',
  },
  input: {
    flex: 6,
    marginVertical: 16,
  },
  iconWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginVertical: 16,
  },
  touchableIconWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderLeftWidth: 1,
    borderLeftColor: COLORS_ENUM.GREY_COLOR,
    minHeight: 64,
  },
  picker: {
    flex: 6,
    marginVertical: 16,
    justifyContent: 'center',
  },
  pickerText: {
    fontSize: FONT_SIZES_ENUM.INPUT_FONT_SIZE,
    fontFamily: 'Montserrat-Medium',
  },
});

type BaseInputPropsType = {
  caretHidden?: boolean,
  label: string,
  value: string,
  onChangeText?: (value: string) => void;
  onFocus?: () => void,
  onBlur?: () => void,
  onIconPress?: () => void,
  icon?: string,
  mask?: {
    type: string,
    format: string,
  },
  picker?: boolean,
  onPickerPress?: () => void,
};
// TODO: [Denis Voronin] Split into several components
export const BaseInput = (props: BaseInputPropsType) => (
  <View style={styles.field}>
    <Text style={styles.label}>{props.label}</Text>
    <View style={styles.inputWrapper}>
      {
        props.picker
          ? (
            <TouchableWithoutFeedback onPress={props.onPickerPress}>
              <View style={styles.picker}>
                <Text style={styles.pickerText}>{props.value}</Text>
              </View>
            </TouchableWithoutFeedback>
          )
          : (
            <>
              {
                props.mask
                  ? (
                    <TextInputMask
                      type={props.mask.type}
                      options={{
                        format: props.mask.format,
                      }}
                      caretHidden={props.caretHidden}
                      value={props.value}
                      onChangeText={props.onChangeText}
                      style={styles.input}
                      onFocus={props.onFocus}
                      onBlur={props.onBlur}
                      returnKeyType="done"
                    />
                  )
                  : (
                    <TextInput
                      caretHidden={props.caretHidden}
                      value={props.value}
                      style={styles.input}
                      onChangeText={props.onChangeText}
                      onFocus={props.onFocus}
                      onBlur={props.onBlur}
                      returnKeyType="done"
                    />
                  )
              }
            </>
          )
      }
      {
        props.icon && (
          <>
            {
              props.onIconPress
                ? (
                  <TouchableWithoutFeedback onPress={props.onIconPress}>
                    <View style={styles.touchableIconWrapper}>
                      <Icon
                        name={props.icon}
                        size={FONT_SIZES_ENUM.INPUT_FONT_SIZE}
                        color={COLORS_ENUM.BLACK_COLOR}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                )
                : (
                  <View style={styles.iconWrapper}>
                    <Icon
                      name={props.icon}
                      size={FONT_SIZES_ENUM.INPUT_FONT_SIZE}
                      color={COLORS_ENUM.GREY_COLOR}
                    />
                  </View>
                )
            }
          </>
        )
      }
    </View>
  </View>
);
