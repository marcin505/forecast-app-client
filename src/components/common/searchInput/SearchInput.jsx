import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './SearchInput.css';
import magnify from 'assets/images/magnify.svg';
import close from 'assets/images/clearX.svg';


class SearchInput extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    searchMode: PropTypes.bool.isRequired,
    placeHolder: PropTypes.string.isRequired,
    resetStringHandler: PropTypes.func.isRequired,
  };

  resetSearchString = () => {
    this.props.resetStringHandler();
    this.reasonInput.focus();
  };

  render() {
    const { value, onChange, onFocus, onBlur, searchMode, placeHolder } = this.props;
    const inputName = 'employeesSearch';
    const searchInputClasses = classNames({
      'search-input': true,
      'search-mode': searchMode,
    });

    return (
      <div className="search-input-wrapper">
        <input
          type="text"
          className={searchInputClasses}
          name = {inputName}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          ref={(input) => { this.reasonInput = input; }}
        />
        {searchMode ?
          <img src={close} alt="close" className="search-input-button close" onClick={() => this.resetSearchString()} />:
          <img src={magnify} alt="glass" className="search-input-button" onClick={onFocus} />
        }
      </div>
    )
  }
}

export default SearchInput;