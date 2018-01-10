import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './TextInput.css';

class TextInput extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    errorMessage: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
  };

  static defaultProps = {
    placeholder: '',
    disabled: false,
    onChange: () => {},
    errorMessage: '',
    onFocus: () => {},
    onBlur: () => {},
  };

  render() {
    const {
      type,
      inputName,
      placeholder,
      value,
      disabled,
      onChange,
      errorMessage,
      onFocus,
      onBlur,

    } = this.props;

    const inputClasses = classNames({
      'error': !!errorMessage,
    });
    return (
      <div className="text-input-wrapper">
        <input 
          type={type}
          name={inputName}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          readOnly={disabled}
          onFocus={onFocus}
          onBlur={onBlur}
          className={inputClasses}
        />

        {!!errorMessage &&
          <div className="form-field-message">
            <span>{errorMessage}</span>
          </div>
        }
      </div>
    )
  }
}

export default TextInput;