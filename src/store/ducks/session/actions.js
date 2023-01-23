import * as types from './types';

export const onAuthentication = (session) => ({
  type: types.ON_AUTHENTICATION,
  payload: session,
});

export const onLogout = () => ({
  type: types.ON_LOGOUT,
});
