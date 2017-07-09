import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import colors from '../../constants/colors';

const { width, height } = Dimensions.get('window');

export default class PhotoItem extends PureComponent {
  render() {
    const {
      title,
      overview,
      poster,
    } = this.props;

    return (
      <View style={styles.container}>
        <Text>{title}</Text>
      </View>
    );
  }
}
PhotoItem.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    width,
    height: height * 0.33,
  },
});
