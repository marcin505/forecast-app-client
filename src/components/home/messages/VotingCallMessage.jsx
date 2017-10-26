import React from 'react';
import PropTypes from 'prop-types';
import PageMessage from 'components/common/pageMessage/PageMessage.jsx'

const VotingCallMessage = ({ votingMonth }) => {

  const renderParagraphs = () => (
    <div>
      <p>Thank you!</p>
      <p>{`Your vote for ${votingMonth} has been added`}</p>
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

export default VotingCallMessage;

