import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Feed from '../../containers/Feed';

export default class FeedContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Feed />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
});
