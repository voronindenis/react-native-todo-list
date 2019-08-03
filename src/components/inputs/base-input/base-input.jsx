// @flow
import * as React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
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
    fontFamily: "Montserrat-Bold",
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
    paddingVertical: 16,
    fontSize: FONT_SIZES_ENUM.INPUT_FONT_SIZE,
    fontFamily: "Montserrat-Medium",
  },
  input: {
    flex: 5,
  },
  iconWrapper: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

type BaseInputPropsType = {
  caretHidden: boolean,
  label: string,
  value: string,
  onChangeText: (value?: string) => void;
  onFocus?: () => void,
  onBlur?: () => void,
  icon?: string,
  mask?: {
    type: string,
    format: string,
  },
};

export const BaseInput = (props: BaseInputPropsType) => (
  <View style={styles.field}>
    <Text style={styles.label}>{props.label}</Text>
    <View style={styles.inputWrapper}>
      {
        props.mask
          ? (
            <TextInputMask
              type={props.mask.type}
              options={{
                format: props.mask.format
              }}
              caretHidden={props.caretHidden}
              value={props.value}
              onChangeText={props.onChangeText}
              style={styles.input}
              onFocus={props.onFocus}
              onBlur={props.onBlur}
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
          />
          )
      }
      {
        props.icon && (
          <View style={styles.iconWrapper}>
            <Icon
              name={props.icon}
              size={FONT_SIZES_ENUM.INPUT_FONT_SIZE}
              color={COLORS_ENUM.GREY_COLOR}
            />
          </View>
        )
      }
    </View>
  </View>
);
