import React, { Component } from 'react';
import 'assets/stylesheets/Styles.css';
import 'assets/stylesheets/Responsive.css';
import { history } from 'routes/History.jsx';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'redux/reducers/rootReducer';
import rootSaga from 'redux/sagas/rootSaga';
import DocumentTitle from 'react-document-title';
import Header from 'components/header/Header.jsx'
import Footer from 'components/footer/Footer.jsx'
import Home from 'components/home/Home.jsx'
import History from 'components/history/History.jsx'
import AdminHome from 'components/admin/adminHome/AdminHome.jsx'
import WinnerSelection from 'components/admin/winnerSelection/WinnerSelection.jsx'
import  {
  ADMIN_WINNER,
  ADMIN_HOME,
  LOGIN,
  USER_HOME,
  USER_HISTORY,
} from 'routes/routesDefinitions.js';
import LoginPage from 'components/loginPage/LoginPage.jsx'
import PrivateRoute from 'routes/PrivateRoute.js';
const sagaMiddleware = createSagaMiddleware();

const store =
  createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware),
  );

sagaMiddleware.run(rootSaga);
class App extends Component {
  render() {
    const errorSite = () => (
      <div className="errorSite">
        404
      </div>
    );

    return (
      <DocumentTitle title="Members Community">
        <Provider store={store}>
          <Router history={history}>
            <div>
              <div className="page">
                <Header />
                <Switch>
                  <Route path={USER_HOME} component={Home}/>
                  <PrivateRoute
                    auth={() => true}
                    path={USER_HISTORY}
                    redirect={LOGIN}
                    component={History}
                  />
                  <Route path={ADMIN_HOME} component={AdminHome}/>
                  <Route path={`${ADMIN_WINNER}/:month/:year`} component={WinnerSelection}/>
                  <Route path={LOGIN} component={LoginPage}/>
                  <Route path='*' exact={true} component={errorSite}/>
                </Switch>
              </div>
              <Footer className="content-wrapper"/>
            </div>
          </Router>
        </Provider>
      </DocumentTitle>
    );
  }
}

export default App;
