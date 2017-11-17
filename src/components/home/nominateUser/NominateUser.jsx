import React, { Component } from 'react';

import PropTypes from 'prop-types';
import SectionHeader from 'components/common/sectionHeader/SectionHeader.jsx';
import NominationTextarea from 'components/common/nominationTextarea/NominationTextarea.jsx';
import han_solo from 'assets/images/people/han_solo.png';
import './NominateUser.css';

class NominateUser extends Component {
  static propTypes = {
    resetNominatedPersonId: PropTypes.func.isRequired,
    nominatedUser: PropTypes.object.isRequired,
    setNominationAdded: PropTypes.func.isRequired,
  };

  render() {
    const { resetNominatedPersonId, nominatedUser, setNominationAdded } = this.props;
    const name = nominatedUser.get('name');
    const surname = nominatedUser.get('surname');
    return (
      <div className="nominate-user">
        <div className="content-wrapper">
         <SectionHeader
           closeAction={resetNominatedPersonId}
           heading={'Add your nominee'}
         />
          <h1>
            {`${name} ${surname}`}
          </h1>
          <img className="section-image mobile" src={han_solo} alt="e2"/>
          <div className="nominate-user__content">
            <img className="section-image" src={han_solo} alt="e2"/>
            <NominationTextarea
              resetNominatedPersonId={resetNominatedPersonId}
              nominatedUser={nominatedUser}
              setNominationAdded={setNominationAdded}
            />
          </div>
        </div>
      </div>
    )
  }
};

export default NominateUser;
