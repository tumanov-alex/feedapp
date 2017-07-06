import { createAction } from 'redux-actions';

const user = {
  INIT: 'INIT',
};

export const init = createAction(
  user.INIT, category => ({ category }));

export default user;
