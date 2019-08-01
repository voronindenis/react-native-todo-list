// @flow
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS_ENUM, FONT_SIZES_ENUM } from '@/constants/common';
import { CategoryItemType } from './header-types';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    width: '100%',
    backgroundColor: COLORS_ENUM.MAIN_COLOR,
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
    borderColor: COLORS_ENUM.WHITE,
    borderRadius: 12,
    borderWidth: 1,
    color: COLORS_ENUM.WHITE,
    fontSize: FONT_SIZES_ENUM.BASE_FONT_SIZE,
    padding: 4,
  },
  lowerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryItem: {
    flex: 1,
    color: COLORS_ENUM.WHITE,
    fontSize: FONT_SIZES_ENUM.BASE_FONT_SIZE,
  },
  title: {
    color: COLORS_ENUM.WHITE,
    fontSize: FONT_SIZES_ENUM.TITLE_FONT_SIZE,
  },
});

type HeaderPropsType = {
  counter: number,
  categories: Array<CategoryItemType>,
};

export const Header = (props: HeaderPropsType) => (
  <View
    style={styles.container}
  >
    <View style={styles.upperContainer}>
      <View style={styles.subUpperContainer}>
        <Text style={styles.title}>Task list</Text>
        <Icon
          name="ellipsis-v"
          size={FONT_SIZES_ENUM.TITLE_FONT_SIZE}
          color={COLORS_ENUM.WHITE}
        />
      </View>
      <View style={styles.subLowerContainer}>
        <View style={styles.counterContainer}>
          <Text style={styles.counter}>Total tasks: {props.counter}</Text>
        </View>
      </View>
    </View>
    <View style={styles.lowerContainer}>
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
    </View>
  </View>
);
