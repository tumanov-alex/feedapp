import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { logout } from '../../actions/user';
import colors from '../../constants/colors';

class Logout extends Component {
  onLogout = () => {
    Actions.login();
    this.props.logout();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          onPress={this.onLogout}
          style={styles.btn}
        >
          Log out
        </Text>
      </View>
    );
  }
}
Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  logout: () =>
    dispatch(logout()),
});
export default connect(null, mapDispatchToProps)(Logout);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-end',
    borderBottomColor: colors.powderblue,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  btn: {
    padding: 5,
    marginRight: 20,
    color: colors.gray10,
  },
});
