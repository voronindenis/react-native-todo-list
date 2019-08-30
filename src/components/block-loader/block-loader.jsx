// Flow
import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { COLORS_ENUM } from '@/constants/common';
import Logo from './assets/logo.png';

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    zIndex: 12,
    backgroundColor: COLORS_ENUM.MAIN_APP_COLOR,
  },
  logoWrapper: {
    width: '100%',
    display: 'flex',
    height: '10%',
    alignItems: 'center',
  },
  logo: {
    width: '80%',
    height: '100%',
    resizeMode: 'stretch',
  },
});

export const BlockLoader = () => (
  <View style={style.container}>
    <View style={style.logoWrapper}>
      <Image style={style.logo} source={Logo} />
    </View>
  </View>
);
