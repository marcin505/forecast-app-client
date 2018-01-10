import React, {Component} from 'react';
import classNames from 'classnames';
import onClickOutside from 'react-onclickoutside'
import PropTypes from 'prop-types';
import {history} from 'routes/History.jsx';
import {
   USER_HOME,
   USER_HISTORY,
   USER_CONTACT,
} from 'routes/routesDefinitions.js';
import LinkComponent from 'components/menu/linkComponent/LinkComponent.jsx'
import han from 'assets/images/people/han_solo.png';
import './Menu.css';

class Menu extends Component {

   static propTypes = {
      menuOpen: PropTypes.bool.isRequired,
      toggleMenu: PropTypes.func.isRequired,
      logout : PropTypes.func.isRequired,
      loggedUser: PropTypes.object.isRequired,
   };

   closeMenu = () => {
      this.props.toggleMenu();
   };

   handleClickOutside = () => {
      if (this.props.menuOpen) {
         this.props.toggleMenu();
      }
   };

   renderUserLinks = (currentUrl) => (
      <div className="menu__links">
         <LinkComponent
            url={USER_HOME}
            name={'Start'}
            currentUrl={currentUrl}
            closeMenu={this.closeMenu}
         >
            Start
         </LinkComponent>
         <LinkComponent
            url={USER_HISTORY}
            name={'History'}
            currentUrl={currentUrl}
            closeMenu={this.closeMenu}
         >
            Start
         </LinkComponent>
         <LinkComponent
            url={USER_CONTACT}
            name={'Contact'}
            currentUrl={currentUrl}
            closeMenu={this.closeMenu}
         >
            Start
         </LinkComponent>
      </div>
   );

   render() {
      const currentUrl = history.location.pathname;
      //todo: fix this flag:
      const {menuOpen} = this.props;
      const menuClasses = classNames({
         'menu': true,
         'open': menuOpen
      });
      const { logout, loggedUser} = this.props;
      const email = loggedUser.get('email');
      return (
         <div className={menuClasses}>
            <div className="menu__top">
               <span className="close-button" onClick={() => this.closeMenu()}/>
            </div>
            <div className="menu__login-container">
               <img className="user-img" src={han} alt="han"/>
               <div className="menu__credentials-container">
                  <div className="logged-as">You are logged as:</div>
                   <div className="credentials">{email}</div>
                   <div className="logout-link" onClick={logout}>Logout</div>
               </div>
            </div>
            {this.renderUserLinks(currentUrl)}
         </div>
      )
   }
}


export default onClickOutside(Menu);
