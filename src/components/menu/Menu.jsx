import React, {Component} from 'react';
import classNames from 'classnames';
import onClickOutside from 'react-onclickoutside'
import PropTypes from 'prop-types';
import {history} from 'routes/History';
import {
   MAIN,
   PROFILE,
} from 'routes/routesDefinitions.js';
import LinkComponent from 'components/menu/linkComponent/LinkComponent.jsx'
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
            url={MAIN}
            name={'Home'}
            currentUrl={currentUrl}
            closeMenu={this.closeMenu}
         />
         <LinkComponent
            url={PROFILE}
            name={'Profile'}
            currentUrl={currentUrl}
            closeMenu={this.closeMenu}
         />
      </div>
   );

   render() {
      const currentUrl = history.location.pathname;
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
               <div className="menu__credentials-container">
                  <div className="logged-as">You are logged as:</div>
                  <div className="credentials">{email}</div>
                  <div className="logout-link" onClick={logout}>logout</div>
               </div>
            </div>
            {this.renderUserLinks(currentUrl)}
         </div>
      )
   }
}


export default onClickOutside(Menu);
