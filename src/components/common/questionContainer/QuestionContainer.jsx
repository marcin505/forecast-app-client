import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './QuestionContainer.css';

class questionContainer extends Component {

  static propTypes = {
    question: PropTypes.object.isRequired,
    yesAction: PropTypes.func.isRequired,
    noAction: PropTypes.func.isRequired,
  };

  renderButtons = () => {
    const { yesAction, noAction } =this.props;
    return (
      <div className="buttons-container">

        <button className="button-sm medium-dark" onClick={() => noAction()}>No</button>
        <button className="button-sm light" onClick={() => yesAction()}>Yes</button>
      </div>
    )
  };

  render() {
    return (
      <div className="question-container">
        <div className="question-container__question">
          {this.props.question}
        </div>
        {this.renderButtons()}
      </div>
    );
  };
};

export default questionContainer;
