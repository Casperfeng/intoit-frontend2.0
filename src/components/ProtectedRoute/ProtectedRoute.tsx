import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import axios from 'axios';

export default function ProtectedRoute({ component, ...rest }: any) {
  const token = useSelector((state: ReduxState) => state.user.token);
  axios.defaults.headers.common['X-Access-Token'] = token;

  const routeComponent = (props: any) =>
    token ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: '/login' }} />
    );
  return <Route {...rest} render={routeComponent} />;
}
