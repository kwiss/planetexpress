import cookie from 'js-cookie';
import Router from 'next/router';

export const login = async (token: string) => {
  cookie.set('token', token, { expires: 1 });
  localStorage.setItem('token', token);
};

const clearToken = () => {
  cookie.remove('token');
  // to support logging out from all windows
  window.localStorage.removeItem('token');
};

export const logout = () => {
  clearToken();
  Router.push('/login', '/login');
};
