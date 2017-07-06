import user from '../actions/user';

const initState = {
  category: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case user.INIT:
      return {
        ...state,
      };
    default:
      return state;
  }
};
