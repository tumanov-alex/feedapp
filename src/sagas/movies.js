import {
  put,
  call,
  takeEvery
} from 'redux-saga/effects';
import axios from 'axios';
import actionsConst from '../constants/actions';

const apiLink = 'https://api.themoviedb.org/3/discover/movie?api_key=7e2cbdcdf4d81220e6ce8c2c45400d7b';

function* getMovies({ moviesPage }) {
  try {
    return yield call(axios.get, `${apiLink}&page=${moviesPage}`);
  } catch (err) {
    return yield put({ type: actionsConst.MOVIE_REQUEST_ERROR, err: err.message });
  }
}

function* handleMovieRequest ({ moviesPage }) {
  const request = yield call(getMovies, { moviesPage });
  yield put({ type: actionsConst.SAVE_MOVIES, movies: request.data.results });
}

export default function* watchGetMovies() {
  yield takeEvery(actionsConst.GET_MOVIES, handleMovieRequest);
}
