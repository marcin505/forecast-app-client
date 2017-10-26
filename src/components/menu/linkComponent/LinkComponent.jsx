import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './LinkComponent.css';

const LinkComponent = ({ url, currentUrl, name, closeMenu }) => {
  const linkClasses = classNames({
    link: true,
    active: url === currentUrl,
  });
  return (
    <div>
      <Link to={url} className={linkClasses} onClick={()=>closeMenu()}>{name}</Link>
    </div>
  );
};

LinkComponent.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  currentUrl: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired
};

export default LinkComponent;
