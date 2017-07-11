import actionsConst from '../constants/actions';

const initState = {
  isLoggedIn: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionsConst.SET_AUTH:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        reqErr: '',
      };
    default:
      return state;
  }
};
