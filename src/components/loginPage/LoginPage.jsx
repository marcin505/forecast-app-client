import React, {Component} from 'react';
import './LoginPage.css';
import TextInput from 'components/common/textInput/TextInput.jsx'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from 'redux/actions/authActions.js';
import {isUserLogged} from 'redux/selectors/authSelectors.js';
import PropTypes from 'prop-types';

class LoginPage extends Component {

   static propTypes = {
      isUserLogged: PropTypes.bool.isRequired,
   };

   constructor() {
      super();
      this.state = {
         email: '',
         password: '',
         errors: {},
         isLoading: false,
         emailPlaceholder: 'Email',
         passwordPlaceholder: 'Password',
      }
   }

   isFormValid() {
      const {email, password} = this.state;
      const errors = {};
      let isFormValid = false;
      const validateEmail = () => {
         var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
         return !!email.match(pattern);
      };
      const validatePassword = () => password.length > 5;
      if (validateEmail() && validatePassword()) {
         this.setState({errors: {}});
         isFormValid = true;
      } else {
         isFormValid = false;
         if (!validateEmail()) {
            errors.email = 'Fix your email';
         }
         if (!validatePassword()) {
            errors.password = 'Fix your password';
         }
         this.setState({errors});
      }
      return isFormValid;
   };

   onChange = (e) => {
      const value = e.target.value;
      const name = e.target.name;
      this.setState({[name]: value})
   };

   onSubmit = (e) => {
      e.preventDefault();
      if (this.isFormValid()) {
         this.props.login({email: this.state.email});
      }
   };


   onFocus = (placeholderName) => {
      this.setState({[placeholderName]: ''});
   };

   onBlur = (placeholderName, inputName) => {
      if (this.state[inputName] === '') {
         this.setState({[placeholderName]: inputName});
      }
   };

   render() {
      const {email, password, errors, emailPlaceholder, passwordPlaceholder} = this.state;
      return (
         <div className="login-page">
            <p className="community-logo">
               Weather App
            </p>

            <form onSubmit={this.onSubmit}>
               <TextInput
                  inputName={'email'}
                  value={email}
                  disabled={false}
                  onChange={this.onChange}
                  errorMessage={errors.email}
                  placeholder={emailPlaceholder}
                  onFocus={() => this.onFocus('emailPlaceholder')}
                  onBlur={() => this.onBlur('emailPlaceholder', 'email')}
               />
               <TextInput
                  inputName={'password'}
                  value={password}
                  disabled={false}
                  onChange={this.onChange}
                  errorMessage={errors.password}
                  placeholder={passwordPlaceholder}
                  onFocus={() => this.onFocus('passwordPlaceholder')}
                  onBlur={() => this.onBlur('passwordPlaceholder', 'password')}
               />
               <button type="submit" className="btn">login</button>
            </form>
         </div>
      )
   }
}

const mapStateToProps = state => {
   return ({
      isUserLogged: isUserLogged(state),
   });
};

const mapDispatchToProps = dispatch => ({
   login: bindActionCreators(login, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
