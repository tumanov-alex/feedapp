import actionsConst from '../constants/actions';

const initState = {
  movies: [],
  moviesPage: 1,
  isMoviesLoading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionsConst.GET_MOVIES:
      return {
        ...state,
        isMoviesLoading: true,
      };
    case actionsConst.SAVE_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.movies],
        moviesPage: (action.moviesPage || state.moviesPage) + 1,
        isMoviesLoading: false,
      };
    default:
      return state;
  }
};
