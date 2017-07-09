import {
  put,
  call,
  take,
} from 'redux-saga/effects';
import axios from 'axios';
import actionsConst from '../constants/actions';

const apiLink = 'https://api.themoviedb.org/3/discover/movie?api_key=7e2cbdcdf4d81220e6ce8c2c45400d7b';

function* getMovies({ moviesPage }) {
  console.log('=========================================')
  console.log('moviesPage: ', moviesPage)
  try {
    return yield call(axios.get, `${apiLink}&page=${moviesPage || 1}`);
  } catch (err) {
    return yield put({ type: actionsConst.MOVIE_REQUEST_ERROR, err: err.message });
  }
}

export default function* watchGetMovies() {
  const request = yield take(actionsConst.GET_MOVIES);
  const movies = yield call(getMovies, { moviesPage: request.moviesPage });
  yield put({ type: actionsConst.SAVE_MOVIES, movies });
}
