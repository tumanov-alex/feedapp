import actionsConst from '../constants/actions';

const initState = {
  movies: null,
  moviesPage: 0,
  isLoading: false,
  requestErr: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionsConst.GET_MOVIES:
      return {
        ...state,
        isLoading: true,
      };
    case actionsConst.SAVE_MOVIES:
      return {
        ...state,
        isLoading: false,
        movies: action.movies.data.results,
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
