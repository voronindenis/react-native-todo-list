// @flow
import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, View } from 'react-native';
import { COLORS_ENUM, FONT_SIZES_ENUM } from '@/constants/common';

type IconButtonPropsType = {
  onPress: Function,
  iconName: string,
}

const styles = StyleSheet.create({
  button: {
    width: 64,
    height: 64,
    backgroundColor: COLORS_ENUM.MAIN_APP_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    margin: 8,
  },
});

export const IconButton = (props: IconButtonPropsType) => (
  <View
    style={styles.button}
    onPress={props.onPress}
  >
    <Icon
      name={props.iconName}
      size={FONT_SIZES_ENUM.TITLE_FONT_SIZE}
      color={COLORS_ENUM.WHITE_COLOR}
    />
  </View>
);
