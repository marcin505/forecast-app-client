import React from 'react';
import PropTypes from 'prop-types';
import han from 'assets/images/people/han_solo.png';
import ribbon from 'assets/images/badge.svg';
import './HistoryUser.css';

const HistoryUser = ({ user }) => {
  const name = user.get('name');
  const surname = user.get('surname');
  const date = user.get('date');
  const nomination = user.get('nomination');
  return (
    <div className="history-user">
      <div className="history-user__date">
        {date}
      </div>
      <div className="history-user__row-1">
        <img src={han} alt="nominee" className="history-user__img " />
        <div className="history-user__container">
          <div className="history-user__nominee">
            <h2 className="nominee_heading">
              {`${name}  ${surname}`}
            </h2>
          </div>
        </div>
      </div>
      <div className="history-user__row-2">
        <div className="nomination">
          <p>{nomination }</p>
        </div>
      </div>
    </div>
  );
};

HistoryUser.propTypes = {
  user: PropTypes.object,
};

HistoryUser.defaultProps = {
  user: {}
};

export default HistoryUser;
