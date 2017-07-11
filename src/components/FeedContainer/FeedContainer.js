import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Feed from '../../containers/Feed';
import Logout from '../Logout';
import colors from '../../constants/colors';

export default class FeedContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Logout style={styles.logout} />

        <Feed />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: colors.gray95,
  },
  logout: {
    marginBottom: 20,
  },
});
