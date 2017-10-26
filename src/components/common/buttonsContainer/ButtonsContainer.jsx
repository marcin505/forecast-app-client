import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ButtonsContainer.scss';

const ButtonsContainer = ({  }) => {

  return (
    <div className="buttons-container">
      <button className="button-sm clear" onClick={()=> this.resetTextArea()}>
        Clear
      </button>
      <button
        className="button-sm"
        onClick={()=> this.nominatePerson()}
        disabled={!this.isTextAreaInteracted() || nominationReason === ''}
        >
        Nominate
      </button>
    </div>
  );
};

PageMessage.propTypes = {

};

PageMessage.defaultProps = {

};

export default ButtonsContainerPageMessage;
