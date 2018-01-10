import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAuth } from 'redux/selectors/authSelectors.js';
import { fromJS } from 'immutable';
import PropTypes from 'prop-types';
import { history } from 'routes/History.jsx';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import {toJS} from 'immutable';
import rootSaga from 'redux/sagas/rootSaga';
import DocumentTitle from 'react-document-title';
import Header from 'components/header/Header.jsx'
import Footer from 'components/footer/Footer.jsx'
import Home from 'components/home/Home.jsx'
import History from 'components/history/History.jsx'
import 'assets/stylesheets/Styles.css';
import 'assets/stylesheets/Responsive.css';
import {
  LOGIN,
  USER_HOME,
  USER_HISTORY,
} from 'routes/routesDefinitions.js';
import AuthPage from 'components/authPage/AuthPage.jsx'
import PrivateRoute from 'routes/PrivateRoute.js';


const errorSite = () => (
  <div className="errorSite">
    404
      </div>
);

const App = ({store, loggedUser}) => {
  const isLogged = loggedUser.get('isLogged');
  console.log(36, isLogged);
  return (
    <DocumentTitle title="Weather App">
      <Provider store={store}>
        <Router history={history}>
          <div>
            <div className="page">
              {isLogged && <Header loggedUser = {loggedUser} />}
              <Switch>
                <PrivateRoute
                  auth={() => isLogged}
                  path={USER_HOME}
                  redirect={LOGIN}
                  component={Home}
                />
                <PrivateRoute
                  auth={() => isLogged}
                  path={USER_HISTORY}
                  redirect={LOGIN}
                  component={History}
                />
                 <PrivateRoute
                  auth={() => !isLogged}
                  path={LOGIN}
                  redirect={USER_HOME}
                  component={AuthPage}
                />
                {/* <Route path={LOGIN} component={AuthPage} /> */}
                <Route path='*' exact={true} component={errorSite} />
              </Switch>
            </div>
            <Footer className="content-wrapper" />
          </div>
        </Router>
      </Provider>
    </DocumentTitle>
  );
}

const mapStateToProps = state => {
  return ({
    loggedUser: getAuth(state),
  });
};
export default connect(mapStateToProps)(App);
