import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getWeatherReducer } from 'redux/selectors/weatherSelectors.js';
import './Profile.css';

class Profile extends Component {

  static propTypes = {
    history: PropTypes.object,
  };

  static defaultProps = {
    history: []
  };

  render() {
    const {history} = this.props;
    return (
      <div className="history">
          <div className="content-wrapper">
              <h1 className="heading-lg semi-bold">
                Profile
              </h1>
            <hr/>
          </div>

      </div>
    )
  }
}


export default Profile;
