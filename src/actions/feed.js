/* eslint-disable import/prefer-default-export */
import actionsConst from '../constants/actions';

export const getMovies = (moviesPage, availableMovies) =>
  ({ type: actionsConst.GET_MOVIES, data: { moviesPage, availableMovies } });
