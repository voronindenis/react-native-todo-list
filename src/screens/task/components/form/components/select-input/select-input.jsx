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
  id: 'string',
  text: 'string',
}

type SelectInputPropsType = {
  getValue: (value: string) => value,
  initialValue?: string,
  label: 'string',
  options: Array<OptionType>,
};

export const SelectInput = (props: SelectInputPropsType) => {
  const [value, setValue] = React.useState(props.initialValue || head(props.options)['text']);

  const [isOpen, setPickerVisible] = React.useState(false);

  React.useEffect(() => {
    if (props.getValue) {
      props.getValue(value);
    }
  }, [props.getValue, value]);

  const handlePickerChange = (value: string) => {
    setValue(value);
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
        value={value}
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
                  <Picker.Item key={option.id} label={option.text} value={option.text} />
                ))
              }
            </Picker>
          </View>
        )
      }
    </>
  );
};
