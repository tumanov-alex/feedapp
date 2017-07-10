import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import colors from '../../constants/colors';

const { width } = Dimensions.get('window');

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
          <Text
            style={styles.overview}
            numberOfLines={4}
          >
            {overview}
          </Text>
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
    flexDirection: 'row',
    marginVertical: 13,
  },
  poster: {
    width: 6 * 15,
    height: 9 * 15,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.blue33,
  },
  overview: {
    width: '100%',
    fontSize: 13,
  },
  info: {
    flex: 1,
    paddingRight: 15,
  },
});
