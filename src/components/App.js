import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAuth} from 'redux/selectors/authSelectors.js';
import {history} from 'routes/History';
import {Provider} from 'react-redux';
import {Router, Switch, Route} from 'react-router-dom';
import {profile} from 'redux/actions/authActions.js';
import DocumentTitle from 'react-document-title';
import Header from 'components/header/Header.jsx'
import Footer from 'components/footer/Footer.jsx'
import Home from 'components/home/Home.jsx'
import Profile from 'components/profile/Profile'
import 'assets/stylesheets/Styles.css';
import 'assets/stylesheets/Responsive.css';
import {
   LOGIN,
   USER_HOME,
   PROFILE,
} from 'routes/routesDefinitions.js';
import AuthPage from 'components/authPage/AuthPage.jsx'
import PrivateRoute from 'routes/PrivateRoute.js';

const errorSite = () => (
   <div className="errorSite">
      404
   </div>
);


class App extends Component {

   componentWillMount () {
      // this.props.profile();
   }

   render() {
      const {store, loggedUser} = this.props;
      const isLogged = loggedUser.get('isLogged');
      return (
         <DocumentTitle title="Weather App">
            <Provider store={store}>
               <Router history={history}>
                  <div>
                     <div className="page">
                        {isLogged && <Header loggedUser={loggedUser}/>}
                        <Switch>
                           <PrivateRoute
                              auth={() => isLogged}
                              path={USER_HOME}
                              redirect={LOGIN}
                              component={Home}
                           />
                           <PrivateRoute
                              auth={() => isLogged}
                              path={PROFILE}
                              redirect={LOGIN}
                              component={Profile}
                              loggedUser={loggedUser}
                           />
                           <PrivateRoute
                              auth={() => !isLogged}
                              path={LOGIN}
                              redirect={USER_HOME}
                              component={AuthPage}
                           />
                           {/* <Route path={LOGIN} component={AuthPage} /> */}
                           <Route path='*' exact={true} component={errorSite}/>
                        </Switch>
                     </div>
                     <Footer className="content-wrapper"/>
                  </div>
               </Router>
            </Provider>
         </DocumentTitle>
      )
   }
}

const mapDispatchToProps = dispatch => ({
   profile: bindActionCreators(profile, dispatch),
});

const mapStateToProps = state => {
   return ({
      loggedUser: getAuth(state),
   });
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
