/* eslint-disable import/prefer-default-export */
import actionsConst from '../constants/actions';

export const getMovies = moviesPage =>
  ({ type: actionsConst.GET_MOVIES, moviesPage });
