import cookie from 'js-cookie';
import jwtDecode from 'jwt-decode';
import nextCookie from 'next-cookies';
import Router from 'next/router';
import { NextPage } from 'next/types';
import { Component } from 'react';

const getDisplayName = (Component) =>
  Component.displayName || Component.name || 'Component';

const clearToken = () => {
  cookie.remove('token');
  // to support logging out from all windows
  window.localStorage.removeItem('token');
};

export const auth = (ctx) => {
  const { token } = nextCookie(ctx);
  const { pathname } = ctx;
  const appUrl = '/app';
  const isPublic =
    pathname === '/login' || pathname === '/signup' || pathname === '/';

  if (token) {
    const isTokenPath = pathname.indexOf(appUrl) !== -1;
    if (!isTokenPath) {
      if (ctx.req) {
        ctx.res.writeHead(302, { Location: appUrl });
        ctx.res.end();
      } else {
        Router.push(appUrl, appUrl);
      }
    }
  }

  if (!token) {
    if (!isPublic) {
      if (ctx.req) {
        ctx.res.writeHead(302, { Location: '/login' });
        ctx.res.end();
      } else {
        Router.push('/login', '/login');
      }
    }
  }

  return token;
};

export const withAuthSync = (WrappedComponent) =>
  class extends Component {
    static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`;

    static async getInitialProps(ctx) {
      const token = auth(ctx);
      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));

      return { ...componentProps, token };
    }

    constructor(props) {
      super(props);

      this.syncLogout = this.syncLogout.bind(this);
    }

    componentDidMount() {
      window.addEventListener('storage', this.syncLogout);
    }

    componentWillUnmount() {
      window.removeEventListener('storage', this.syncLogout);
      window.localStorage.removeItem('logout');
    }

    syncLogout(event) {
      if (event.key === 'logout') {
        console.log('logged out from storage!');
        Router.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default withAuthSync;
