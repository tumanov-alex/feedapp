import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ActivityIndicator,
  ListView,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import InfiniteScrollView from 'react-native-infinite-scroll-view';
import MovieItem from '../../components/MovieItem';
import { getMovies } from '../../actions/feed';
import getNewKey from '../../helpers/getNewKey';

class Feed extends Component {
  constructor() {
    super();

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  }

  componentDidMount() {
    console.log('=========================================')
    console.log('=========================================')
    console.log(this.props.feed.movies)
    // the request have been placed here for optimisation purposes
    !this.props.feed.movies && this.props.getMovies();
  }

  renderMovie = () => {
    const {
      feed: {
        movies,
      },
    } = this.props;

    return movies.map(({ title, overview, poster_path }) => (
      <MovieItem
        title={title}
        overview={overview}
        poster={poster_path} // eslint-disable-line
        key={getNewKey()}
      />
    ));
  };

  render() {
    const {
      feed: {
        isLoading,
        moviesPage,
      },
    } = this.props;

    return (
      <View style={styles.container}>
        {isLoading
          ? <ActivityIndicator />
          : <ListView
              renderScrollComponent={props => <InfiniteScrollView {...props} />}
              onLoadMoreAsync={() => this.props.getMovies(moviesPage)}
              dataSource={this.state.dataSource}
              renderRow={data => <MovieItem {...data} />}
            />}
      </View>
    );
  }
}
Feed.propTypes = {
  getMovies: PropTypes.func.isRequired,
  feed: PropTypes.shape({
    isLoading: PropTypes.bool.isRequired,
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
