import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirect, auth, ...rest, store }) => (
  <Route
    {...rest}
    render={props => (auth()
        ? (<Component {...props} {...store}/>)
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
