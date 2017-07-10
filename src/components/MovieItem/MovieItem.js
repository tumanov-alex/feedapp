import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
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
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w300${poster}` }}
          style={styles.poster}
        />
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.overview}>{overview}</Text>
        </View>
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
    flexDirection: 'row',
  },
  poster: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 20,
  },
  overview: {
    width: '100%',
  },
  info: {
    flex: 0.3,
  },
});
