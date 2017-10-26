import React from 'react';
import PropTypes from 'prop-types';
import PageMessage from 'components/common/pageMessage/PageMessage.jsx'

const NominationAddedMessage = ({ votingMonth }) => {

  const renderParagraphs = () => (
    <div>
      <p>Thank you!</p>
      <p>{`Your nomination for ${votingMonth} has been added`}</p>
      <p>You may add another nominee if you want</p>
    </div>
  );
  return (
    <div className="content-wrapper">
      <PageMessage
        paragraphs={renderParagraphs()}
      />
    </div>
  )
};

PageMessage.propTypes = {
  votingMonth: PropTypes.string,
};

PageMessage.defaultProps = {
  votingMonth: '',
};

export default NominationAddedMessage;

