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

    yield cacheMovies([...availableMoviesTmp, ...request.data.results]);

    return request;
  } catch (err) {
    console.error(err.message);
    return null;
  }
}

function* getMovies(moviesPage) {
  let _moviesPage;
  const cachedMovies = yield getCachedMovies();

  if (cachedMovies && moviesPage === 1) {
    const movies = JSON.parse(cachedMovies);
    _moviesPage = movies.length / moviesFromOnePage;

    return { movies, moviesPage: _moviesPage };
  }
  return yield call(getMoviesFromAPI, _moviesPage);
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
