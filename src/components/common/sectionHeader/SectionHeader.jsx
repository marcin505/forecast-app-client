import React from 'react';
import PropTypes from 'prop-types';
import CloseContainer from 'components/common/closeContainer/CloseContainer.jsx';
import './SectionHeader.css';

const SectionHeader = ({closeAction, heading}) => {
   return (
      <div className="section-header">
         <div className="heading-red-sm">{heading}</div>
         {
            <CloseContainer
               closeAction={closeAction}
               className='closeContainer'
            />
         }
      </div>
   );
};

SectionHeader.propTypes = {
   closeAction: PropTypes.func.isRequired,
   heading: PropTypes.string.isRequired,
};

export default SectionHeader;