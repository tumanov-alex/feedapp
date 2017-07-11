/* eslint-disable import/prefer-default-export */
import actionsConst from '../constants/actions';

export const loginRequest = data =>
  ({ type: actionsConst.LOGIN_REQUEST, data });

export const logout = () =>
  ({ type: actionsConst.LOGOUT });
