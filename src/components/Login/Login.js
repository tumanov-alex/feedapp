import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import colors from '../../constants/colors';
import { loginRequest } from '../../actions/user';

const { width, height } = Dimensions.get('window');
const isIOS = Platform.OS === 'ios';

class Login extends PureComponent {
  state = {
    username: '',
    pass: '',
  };

  render() {
    const {
      loginRequest,
    } = this.props;

    return (
      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.header}>Feed</Text>

        <TextInput
          style={styles.input}
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
          placeholder='username'
          autoCapitalize='none'
          autoCorrect={false}
        />

        {isIOS && <View style={styles.hr} />}

        <TextInput
          style={[styles.input, styles.marginBottom10]}
          onChangeText={pass => this.setState({ pass })}
          value={this.state.pass}
          placeholder='password'
          autoCapitalize='none'
          autoCorrect={false}
        />

        <TouchableWithoutFeedback
          style={styles.btn}
          onPress={() => loginRequest(this.state)}
        >
          <View style={styles.btnTxtCont}>
            <Text style={styles.btnTxt}>Log in</Text>
          </View>
        </TouchableWithoutFeedback>

        <Text style={styles.footer}>Tumanov inc. ©</Text>
      </KeyboardAvoidingView>
    );
  }
}
Login.propTypes = {
  loginRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  loginRequest: data =>
    dispatch(loginRequest(data)),
});
export default connect(null, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.15,
    backgroundColor: colors.gray95,
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    height: height * 0.2,
    color: colors.powderblue,
  },
  footer: {
    fontSize: 12,
    position: 'absolute',
    bottom: 10,
    color: colors.gray35,
  },
  hr: {
    width: '100%',
    borderBottomColor: colors.gray35,
    borderBottomWidth: 2,
  },
  input: {
    width: '100%',
    height: 35,
    color: colors.gray35,
  },
  marginBottom10: {
    marginBottom: 10,
  },
  btn: {
    height: 40,
    width: '100%',
    paddingHorizontal: 10,
  },
  btnTxtCont: {
    width: '100%',
    alignItems: 'flex-end',
  },
  btnTxt: {
    color: colors.gray10,
  },
});
