// @flow
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Swipeout from 'react-native-swipeout';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { FONT_SIZES_ENUM, COLORS_ENUM } from '@/constants/common';
import { IconButton } from '@/components/icon-button';
import type { TodoItemType } from '../../todo-list-types';

const styles = StyleSheet.create({
  swipeContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 16,
    minHeight: 64,
    maxHeight: 64,
    backgroundColor: COLORS_ENUM.WHITE_COLOR,
    borderRadius: 16,
    shadowColor: COLORS_ENUM.SHADOW_COLOR,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 1,
    margin: 8,
  },
  infoContainer: {
    flex: 5,
    paddingHorizontal: 24,
  },
  upperInfoContainer: {
    flex: 1,
  },
  title: {
    color: COLORS_ENUM.BLACK_COLOR,
    fontSize: FONT_SIZES_ENUM.BASE_FONT_SIZE,
    fontFamily: 'Montserrat-Bold',
  },
  lowerInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    fontSize: FONT_SIZES_ENUM.BASE_FONT_SIZE,
    color: COLORS_ENUM.SECONDARY_TEXT_COLOR,
    fontFamily: 'Montserrat-Medium',
  },
  expirationDate: {
    fontSize: FONT_SIZES_ENUM.BASE_FONT_SIZE,
    color: COLORS_ENUM.SECONDARY_TEXT_COLOR,
    fontFamily: 'Montserrat-Medium',
  },
  doneSignContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type ListItemPropsType = {
  item: TodoItemType,
  isClose: boolean,
  onDeleteButtonPress: (id: string) => void,
  onEditTodoItem: (id: string) => void,
};

export const ListItem = (props: ListItemPropsType) => {
  const swipeOutButtons = [
    {
      component: (
        <IconButton
          iconName="pencil-alt"
          onPress={() => props.onEditTodoItem(props.item.id)}
        />
      ),
      backgroundColor: 'transparent',
    },
    {
      component: (
        <IconButton
          iconName="trash-alt"
          onPress={() => props.onDeleteButtonPress(props.item.id)}
        />
      ),
      backgroundColor: 'transparent',
    },
  ];

  return (
    <Swipeout
      close={props.isClose}
      style={styles.swipeContainer}
      right={swipeOutButtons}
    >
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.upperInfoContainer}>
            <Text style={styles.upperInfoContainer}>
              {props.item.title}
            </Text>
          </View>
          <View style={styles.lowerInfoContainer}>
            <Text style={styles.category}>
              {props.item.category.text}
            </Text>
            <Text style={styles.expirationDate}>
              {props.item.expirationDate}
            </Text>
          </View>
        </View>
        <View style={styles.doneSignContainer}>
          <Text>
            {
              props.item.isDone
                ? (
                  <Icon
                    name="check-circle"
                    size={FONT_SIZES_ENUM.TITLE_FONT_SIZE}
                    color={COLORS_ENUM.BLACK_COLOR}
                  />
                )
                : (
                  <Icon
                    name="circle"
                    size={FONT_SIZES_ENUM.TITLE_FONT_SIZE}
                    color={COLORS_ENUM.BLACK_COLOR}
                  />
                )
            }
          </Text>
        </View>
      </View>
    </Swipeout>
  );
};
