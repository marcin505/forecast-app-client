import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

class Profile extends Component {

   static propTypes = {
      loggedUser: PropTypes.object,
   };

   static defaultProps = {

   };

   render() {
      const loggedUser = this.props.loggedUser.toJS();
      const userData = {email : loggedUser.email, id: loggedUser._id }

      console.log(19, loggedUser);
      return (
         <div className="profile">
            <div className="content-wrapper">
               <h1 className="heading-lg semi-bold">
                  Profile
               </h1>
               <hr/>
               {
                  Object.keys(userData).map((k, index) => (
                     <div key={index} className="profile__record">
                        <div className="profile__record-key">{k}:</div>
                        <div className="profile__record-value">{userData[k]}</div>
                     </div>
                  ))
               }
            </div>
         </div>
      )
   }
}

export default Profile;
