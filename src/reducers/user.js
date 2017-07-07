import actionsConst from '../constants/actions';

const initState = {
  isLoggedIn: false,
  reqErr: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case actionsConst.SET_AUTH:
      return {
        ...state,
        isLoggedIn: true,
      };
    case actionsConst.REQUEST_ERROR:
      console.log('req err')
      return {
        ...state,
        reqErr: 'suka',
      };
    default:
      return state;
  }
};
