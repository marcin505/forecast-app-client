import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import QuestionContainer from 'components/common/questionContainer/QuestionContainer.jsx';
import './JustificationTextarea.css';

class JustificationTextarea extends Component {

  static propTypes = {
    resetNominatedPersonId: PropTypes.func,
    setNominationAdded: PropTypes.func,
    nominatedUser: PropTypes.object.isRequired,
    onNominate: PropTypes.func,
    onCancel: PropTypes.func,
  };

  static defaultProps = {
    setNominationAdded: () => {},
    resetNominatedPersonId: () => {},
    onNominate: () => {},
    onCancel: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      textAreaFocus : false,
      justificationButtonString: 'Pick as a winner',
      selectionReason: 'Start typing...',
      showQuestion: false
    };
  };

  onChangeHandler = (e) => {
    const textareaValue =  e.target.value;
    this.setState({ selectionReason: textareaValue });
  };

  onFocus =()=> {
    this.setState({ textAreaFocus: true });
    if(this.state.selectionReason==='Start typing...') {
      this.setState({ selectionReason: '' })
    }
  };

  onBlur= () => {
    this.setState({ textAreaFocus: false });
    if (this.state.selectionReason==='') {
     this.setState({ selectionReason: 'Start typing...'})
    }
  };

  resetTextArea = () => {
    this.reasonInput.focus();
    this.setState({
      selectionReason: ''
    })
  };

  renderButtons = () => {
    const { justificationButtonString, selectionReason } = this.state;
    return (
      <div className="buttons-container inside-input">
        <button className="button-sm clear" onClick={()=> this.resetTextArea()}>
          Clear
        </button>
        {this.props.onCancel &&
        <button className="button-sm light" onClick={()=> this.props.onCancel()}>
          Cancel
        </button>
        }
        <button
          className="button-sm wide"
          onClick={()=> this.toggleQuestion()}
          disabled={selectionReason.length < 1 || selectionReason === 'Start typing...' }
        >
          {justificationButtonString}
        </button>
      </div>
    )
  };

  renderTextarea = () => {
    const textAreaClasses = classNames({
      'textarea': true,
      'active': this.state.textAreaFocus,
    });
    const { selectionReason } = this.state;
    return (
    <div className="textarea-wrapper">
      <p className="textarea-wrapper__header">Justification:</p>
        <textarea
          className={textAreaClasses}
          value={selectionReason}
          onChange={(e)=> this.onChangeHandler(e)}
          onFocus={() => this.onFocus()}
          onBlur={() => this.onBlur()}
          rows="9"
          cols="100"
          ref={(input) => { this.reasonInput = input; }}
          maxLength={400}
          >
        </textarea>
      {this.renderButtons()}
    </div>
  )};

  selectWinner = () => {
    console.log('winner');
  };

  toggleQuestion = () => {
    this.setState({showQuestion: !this.state.showQuestion})
  };

  renderQuestion = () => {
    const name = this.props.nominatedUser.get('name');
    const surname = this.props.nominatedUser.get('surname');
    const question = () => (
      <p>Do you really want to make <br/> {name} {surname} a winner for July? (date mocked) </p>
    );

    return (
      <QuestionContainer
        question= {question()}
        yesAction={this.selectWinner}
        noAction={this.toggleQuestion}
      />
    );
  };

  render() {
    const {showQuestion} = this.state;
    return (
      <div>
        {showQuestion ?
          this.renderQuestion() :
          this.renderTextarea()
        }
      </div>
    )
  }
}

export default JustificationTextarea;


