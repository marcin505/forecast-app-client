import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CloseContainer.css';

class CloseContainer extends Component {
  static propTypes = {
    closeAction: PropTypes.func.isRequired,
  };

  render() {
    return(
      <div className="close-container" onClick={()=> this.props.closeAction()}>
        <h2>
          Close
        </h2>
        <span className="close" />
      </div>
    )
  }
}

export default CloseContainer;


