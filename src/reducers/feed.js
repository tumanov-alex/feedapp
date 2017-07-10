import actionsConst from '../constants/actions';

const initState = {
  movies: [],
  moviesPage: 1,
  requestErr: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionsConst.SAVE_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.movies],
        moviesPage: state.moviesPage + 1,
      };
    case actionsConst.MOVIE_REQUEST_ERROR:
      return {
        ...state,
        requestErr: action.err,
      };
    default:
      return state;
  }
};
