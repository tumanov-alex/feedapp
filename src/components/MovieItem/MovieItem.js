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

export default class MovieItem extends PureComponent {
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
MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
MovieItem.defaultProps = {
  title: null,
  overview: null,
  poster: null,
};

const styles = StyleSheet.create({
  container: {
    width,
    height: height * 0.33,
  },
});
