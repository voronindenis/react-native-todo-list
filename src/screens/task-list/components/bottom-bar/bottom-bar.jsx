// @flow
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS_ENUM } from '../../../../constants/common';
import { IconButton } from '../../../../components/icon-button/index';

type BottomBarPropsType = {
  onAddButtonPress: () => void,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const BottomBar = (props: BottomBarPropsType) => (
  <LinearGradient
    colors={[
      COLORS_ENUM.WHITE_TRANSPARENT_COLOR,
      COLORS_ENUM.WHITE_MORE_TRANSPARENT_COLOR,
      COLORS_ENUM.WHITE_LESS_TRANSPARENT_COLOR,
      COLORS_ENUM.WHITE_COLOR,
      COLORS_ENUM.WHITE_COLOR
    ]}
    locations={[0, 0.2, 0.6, 0.8, 1]}
    style={styles.container}
  >
    <IconButton
      iconName="plus"
      onPress={props.onAddButtonPress}
    />
  </LinearGradient>
);
