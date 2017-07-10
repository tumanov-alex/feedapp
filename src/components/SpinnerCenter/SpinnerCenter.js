import React, { PureComponent } from 'react';
import {
  Dimensions,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const { height } = Dimensions.get('window');

export default class SpinnerCenter extends PureComponent {
  render () {
    return <ActivityIndicator style={styles.spinner} />;
  }
}

const styles = StyleSheet.create({
  spinner: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: height * 0.49,
  },
});

