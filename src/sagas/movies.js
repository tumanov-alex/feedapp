import {
  put,
  call,
  takeEvery,
} from 'redux-saga/effects';
import axios from 'axios';
import actionsConst from '../constants/actions';
import { cacheMovies, getCachedMovies } from '../helpers/cache';

const apiLink = 'https://api.themoviedb.org/3/discover/movie?api_key=7e2cbdcdf4d81220e6ce8c2c45400d7b';
const moviesFromOnePage = 20;
let availableMoviesTmp;

function* getMoviesFromAPI(moviesPage) {
  try {
    const request = yield call(axios.get, `${apiLink}&page=${moviesPage}`);
    const availableMoviesLength = availableMoviesTmp.length - 1;
    const requestResultsLength = request.data.results.length - 1;
    console.log(availableMoviesTmp)

    if (availableMoviesLength > 0) {
      if (availableMoviesTmp[availableMoviesLength - 19] !== request.data.results[requestResultsLength - 19]) {
        yield cacheMovies([...availableMoviesTmp, ...request.data.results ]);

        return request;
      }
    } else {
      yield cacheMovies([ ...request.data.results ]);

      return request;
    }

    return {
      data: {
        results: availableMoviesTmp,
      },
    };
  } catch (err) {
    console.error(err.message);
    return null;
  }
}

function* getMovies(moviesPage) {
  const cachedMovies = yield getCachedMovies();

  if (cachedMovies && moviesPage === 1) {
    const movies = JSON.parse(cachedMovies);
    const cachedMoviesPage = movies.length / moviesFromOnePage;

    return { movies, moviesPage: cachedMoviesPage };
  }

  return yield call(getMoviesFromAPI, moviesPage);
}

function* handleMovieRequest({ data: { moviesPage, availableMovies } }) {
  availableMoviesTmp = availableMovies || [];

  const result = yield call(getMovies, moviesPage);
  yield put({
    type: actionsConst.SAVE_MOVIES,
    movies: (result.data && result.data.results) || result.movies,
    moviesPage: result.moviesPage || moviesPage,
  });
}

export default function* watchGetMovies() {
  yield takeEvery(actionsConst.GET_MOVIES, handleMovieRequest);
}
