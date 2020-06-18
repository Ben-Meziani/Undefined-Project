// Action Types

export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN = 'LOGIN';
export const FINISH_LOADING = 'FINISH_LOADING';
export const CONNECT = 'CONNECT';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';

//  Actions Creators

export const changeValue = (name, value) => ({
  type: CHANGE_VALUE,
  name,
  value,
});

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});


export const finishLoading = () => ({
  type: FINISH_LOADING,
});

export const connect = () => ({
  type: CONNECT,
});

export const register = (name, value) => ({
  type: REGISTER,
  name,
  value,
});
