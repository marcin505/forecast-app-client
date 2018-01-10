import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirect, auth, ...rest }) => (
  <Route
    render={props => (auth()
        ? (<Component {...rest} />)
        : (<Redirect to={{ pathname: redirect }} />)
      )}
    />
);

PrivateRoute.propTypes = {
  redirect: PropTypes.string.isRequired,
  auth: PropTypes.func.isRequired,
  component: PropTypes.func.isRequired,
};

export default PrivateRoute;
