import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import colors from '../../constants/colors';

const { width, height } = Dimensions.get('window');

export default class Login extends Component {
  state = { // eslint-disable-line
    login: '',
    pass: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Feed</Text>

        <TextInput
          style={styles.input}
          onChangeText={login => this.setState({ login })}
          value={this.state.login}
          placeholder='username'
          autoCapitalize='none'
          autoCorrect={false}
        />
        <View style={styles.hr} />
        <TextInput
          style={styles.input}
          onChangeText={pass => this.setState({ pass })}
          value={this.state.pass}
          placeholder='password'
          autoCapitalize='none'
          autoCorrect={false}
        />

        <TouchableHighlight
          style={styles.btn}
          onPress={txt => console.log(this.state)}
        >
          <Text style={styles.btnTxt}>Log in</Text>
        </TouchableHighlight>

        <Text style={styles.footer}>Tumanov inc. ©</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.15,
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
  },
  hr: {
    width: '100%',
    borderBottomColor: colors.gray35,
    borderBottomWidth: 2,
  },
  input: {
    height: 35,
    marginBottom: 10,
    color: colors.gray35,
  },
  btn: {
    height: 40,
    width: '100%',
    paddingHorizontal: 10,
  },
  btnTxt: {
    textAlign: 'right',
    color: colors.gray10,
  },
});
