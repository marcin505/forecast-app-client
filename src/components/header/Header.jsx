import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getAuth} from 'redux/selectors/authSelectors.js';
import {logout} from 'redux/actions/authActions.js';
import './Header.css';
import Menu from 'components/menu/Menu.jsx';
import {
   MAIN,
} from 'routes/routesDefinitions.js';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    }
  };

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen })
  };
  logout = () => {
    this.props.logout();
  }

  render() {
    return (
      <div className="header-container">
      <div className="header content-wrapper">
        <div className="header__logotypes">
          <Link className="members__logo" to={MAIN}>
            Weather App
          </Link>
        </div>
        <div className="hamburger" onClick={() => this.toggleMenu()}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      {<Menu
        menuOpen={this.state.menuOpen}
        toggleMenu={this.toggleMenu}
        logout = {this.logout}
        loggedUser = {this.props.loggedUser}
      />}
    </div>
    
    )
  };
}

const mapStateToProps = state => {
 return ({
    loggedUser: getAuth(state)
 });
};

const mapDispatchToProps = dispatch => ({
  logout: bindActionCreators(logout, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);


