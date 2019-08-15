// @flow
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS_ENUM, FONT_SIZES_ENUM } from '../../../../constants/common';
import type { CategoryItemType } from './top-bar-types';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    width: '100%',
    backgroundColor: COLORS_ENUM.MAIN_APP_COLOR,
    paddingLeft: 24,
    paddingRight: 24,
  },
  upperContainer: {
    flex: 4,
  },
  subUpperContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  subLowerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  counterContainer: {
    flex: 1,
  },
  counter: {
    borderColor: COLORS_ENUM.WHITE_COLOR,
    borderRadius: 12,
    borderWidth: 1,
    color: COLORS_ENUM.WHITE_COLOR,
    fontSize: FONT_SIZES_ENUM.BASE_FONT_SIZE,
    fontFamily: "Montserrat-Medium",
    padding: 4,
  },
  lowerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryItem: {
    color: COLORS_ENUM.WHITE_COLOR,
    fontSize: FONT_SIZES_ENUM.BASE_FONT_SIZE,
    fontFamily: "Montserrat-Medium",
    alignItems: 'center',
    width: 100
  },
  title: {
    color: COLORS_ENUM.WHITE_COLOR,
    fontSize: FONT_SIZES_ENUM.TITLE_FONT_SIZE,
    fontFamily: "Montserrat-Bold",
    fontWeight: "700",
  },
});

type TopBarPropsType = {
  counter: number,
  categories: Array<CategoryItemType>,
};

export const TopBar = (props: TopBarPropsType) => (
  <View
    style={styles.container}
  >
    <View style={styles.upperContainer}>
      <View style={styles.subUpperContainer}>
        <Text style={styles.title}>Task list</Text>
        <Icon
          name="ellipsis-v"
          size={FONT_SIZES_ENUM.TITLE_FONT_SIZE}
          color={COLORS_ENUM.WHITE_COLOR}
        />
      </View>
      <View style={styles.subLowerContainer}>
        <View style={styles.counterContainer}>
          <Text style={styles.counter}>Total tasks: {props.counter}</Text>
        </View>
      </View>
    </View>
    <ScrollView
      contentContainerStyle={styles.lowerContainer}
      horizontal
    >
      {
        props.categories.map((category: CategoryItemType) => (
          <Text
            key={category.id}
            style={styles.categoryItem}
          >
            {category.text}
            </Text>
        ))
      }
    </ScrollView>
  </View>
);
