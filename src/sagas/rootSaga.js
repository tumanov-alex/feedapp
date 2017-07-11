import {
  watchAuthorize,
  logoutFlow,
} from './auth';
import watchGetMovies from './movies';

export default function* rootSaga() {
  yield [
    watchAuthorize(),
    watchGetMovies(),
    logoutFlow(),
  ];
}
