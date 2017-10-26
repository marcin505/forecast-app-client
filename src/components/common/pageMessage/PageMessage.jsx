import React from 'react';
import PropTypes from 'prop-types';
import './PageMessage.css';
import tick from 'assets/images/tick.svg';

const PageMessage = ({ paragraphs }) => {
  return (
    <div className="page-message">
      <img src={tick} alt="tick" className="page-message__tick" />
      {paragraphs}
    </div>
  );
};

PageMessage.propTypes = {
  paragraphs: PropTypes.object.isRequired,
};

PageMessage.defaultProps = {

};

export default PageMessage;
