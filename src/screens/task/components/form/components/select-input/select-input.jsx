// @flow
import * as React from 'react';
import { Picker, View, StyleSheet } from 'react-native';
import { head } from '@/utils/head';
import { COLORS_ENUM } from '@/constants/common';
import { BaseInput } from '../base-input';

const styles = StyleSheet.create({
  pickerWrapper: {
    backgroundColor: COLORS_ENUM.DEFAULT_BACKGROUND_COLOR,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 240,
    zIndex: 10,
  },
});

type OptionType = {
  id: string,
  text: string,
}

type SelectInputPropsType = {
  getValue: (value: string) => void,
  initialValue?: string,
  label: string,
  options: Array<OptionType>,
};

const findSelectedOptionText = (options: Array<OptionType>, value: string) => {
  const selectedOption = options.find((option: OptionType) => option.id === value);
  return selectedOption && selectedOption.text || '';
};

export const SelectInput = (props: SelectInputPropsType) => {
  const [value, setValue] = React.useState(head(props.options)['id']);
  const [text, setText] = React.useState(findSelectedOptionText(props.options, value));

  React.useEffect(() => {
    if (props.initialValue) {
      setValue(props.initialValue);
      setText(findSelectedOptionText(props.options, props.initialValue));
    }
  }, [props.initialValue]);

  React.useEffect(() => {
    props.getValue(value);
  }, [value]);

  const [isOpen, setPickerVisible] = React.useState(false);

  const handlePickerChange = (value: string) => {
    setValue(value);
    setText(findSelectedOptionText(props.options, value));
    props.getValue(value);
    setPickerVisible(!isOpen);
  };

  const handlePickerPress = () => {
    setPickerVisible(!isOpen);
  };

  const handleIconPress = () => {
    setPickerVisible(!isOpen);
  };
  return (
    <>
      <BaseInput
        label={props.label}
        onIconPress={handleIconPress}
        value={text}
        icon={isOpen ? 'chevron-up' : 'chevron-down'}
        picker
        onPickerPress={handlePickerPress}
      />
      {
        isOpen && (
          <View style={styles.pickerWrapper}>
            <Picker
              onValueChange={handlePickerChange}
              selectedValue={value}
            >
              {
                props.options.map((option: OptionType) => (
                  <Picker.Item key={option.id} label={option.text} value={option.id} />
                ))
              }
            </Picker>
          </View>
        )
      }
    </>
  );
};
