// @flow
import * as React from 'react';
import { Picker, View, StyleSheet } from 'react-native';
import { noop } from '@/utils/noop';
import { BaseInput } from '../base-input';
import {COLORS_ENUM} from '../../../constants/common';

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
  label: 'string',
  options: Array<OptionType>,
};

export const SelectInput = (props: SelectInputPropsType) => {
  const [value, setValue] = React.useState('');

  const [isOpen, setPickerVisible] = React.useState(false);

  React.useEffect(() => {
    if (props.getValue) {
      props.getValue(value);
    }
  }, [props.getValue, value]);

  const handlePickerChange = (value: string) => {
    setValue(value);
  };

  const handleSelectInputFocus = () => {
    setPickerVisible(true)
  };

  const handleSelectInputBlur = () => {
    setPickerVisible(false)
  };

  const handleIconPress = () => {
    setPickerVisible(!isOpen);
  };

  return (
    <>
      <BaseInput
        caretHidden={isOpen}
        label={props.label}
        onChangeText={noop}
        onBlur={handleSelectInputBlur}
        onFocus={handleSelectInputFocus}
        onIconPress={handleIconPress}
        value={value}
        icon={isOpen ? 'chevron-up' : 'chevron-down'}
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
