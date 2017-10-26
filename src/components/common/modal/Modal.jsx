import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweenMax } from "gsap";
import tick from 'assets/images/tick.svg';
import './Modal.css';

class Modal extends Component {

  static propTypes = {
    message: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  componentWillEnter (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.6, {y: 0, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.6, {y: 0, opacity: 1}, {y: 0, opacity: 0, onComplete: callback});
  }

  render() {
    const { message, onClick } = this.props;
    return (
      <div className="modal-wrapper" ref={c => this.container = c}>
        <div className="modal">
          <div className="modal__content">
            <img src={tick} alt="" className="modal__content__icon" />
            <div className="modal__content__message">
                <p>Thank You!</p>
                <p>{message}</p>
            </div>
            <button className="btn thin" onClick={() => onClick(false)}>OK</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;
