import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import MovieItem from '../../components/MovieItem';
import SpinnerCenter from '../../components/SpinnerCenter';
import { getMovies } from '../../actions/feed';
import getNewKey from '../../helpers/getNewKey';

class Feed extends Component {
  componentDidMount() {
    const {
      getMovies,
      feed: {
        movies,
        moviesPage,
      },
    } = this.props;

    // the request have been placed here for optimisation purposes
    !movies.length && getMovies(moviesPage);
  }

  render() {
    const {
      feed: {
        moviesPage,
        movies,
      },
      getMovies,
    } = this.props;

    return (
      <View>
        {movies.length
          ? <FlatList
              data={movies}
              renderItem={data => (
                <MovieItem
                  title={data.item.title}
                  overview={data.item.overview}
                  poster={data.item.poster_path}
                />)}
              onEndReached={() => getMovies(moviesPage)}
              onEndThreshold={100}
              keyExtractor={() => getNewKey()}
          />
          : <SpinnerCenter />}
      </View>
    );
  }
}
Feed.propTypes = {
  getMovies: PropTypes.func.isRequired,
  feed: PropTypes.shape({
    moviesPage: PropTypes.number.isRequired,
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};

const mapStateToProps = state => ({ feed: state.feed });
const mapDispatchToProps = dispatch => ({
  getMovies: page =>
    dispatch(getMovies(page)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Feed);
