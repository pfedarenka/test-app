import React from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import apiPath from '../constants/api-path';

/* eslint-disable react/jsx-props-no-spreading */
const PrivateRoute = ({ component: Component, isLegal, ...rest }: any) => (
  <Route
    {...rest}
    render={(props: RouteComponentProps) => (
      isLegal
        ? <Component {...props} />
        : <Redirect to={{ pathname: apiPath.root, state: { from: props.location } }} />
    )}
  />
);

export default PrivateRoute;
