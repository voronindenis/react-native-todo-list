// @flow
import * as React from 'react';
import {
  StyleSheet, Text, View, TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS_ENUM, FONT_SIZES_ENUM } from '@/constants/common';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: COLORS_ENUM.MAIN_APP_COLOR,
    paddingLeft: 24,
    paddingRight: 24,
  },
  rightIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: COLORS_ENUM.WHITE_COLOR,
    fontSize: FONT_SIZES_ENUM.TITLE_FONT_SIZE,
    fontFamily: "Montserrat-Bold",
    fontWeight: "700",
  },
});

type TopBarPropsType = {
  onBackButtonPress: () => Promise<void>,
  onMenuButtonPress: () => void,
  title?: string,
};

export const TopBar = (props: TopBarPropsType) => (
  <View
    style={styles.container}
  >
    <TouchableWithoutFeedback
      onPress={props.onBackButtonPress}
    >
      <View style={styles.rightIconContainer}>
        <Icon
          name="arrow-left"
          size={FONT_SIZES_ENUM.TITLE_FONT_SIZE}
          color={COLORS_ENUM.WHITE_COLOR}
        />
      </View>
    </TouchableWithoutFeedback>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
    <TouchableWithoutFeedback
      onPress={props.onMenuButtonPress}
    >
      <View style={styles.leftIconContainer}>
        <Icon
          name="ellipsis-v"
          size={FONT_SIZES_ENUM.TITLE_FONT_SIZE}
          color={COLORS_ENUM.WHITE_COLOR}
        />
      </View>
    </TouchableWithoutFeedback>
  </View>
);
