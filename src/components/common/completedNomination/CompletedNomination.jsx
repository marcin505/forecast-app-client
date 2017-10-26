import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CompletedNomination.css';
import classNames from 'classnames';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import QuestionContainer from 'components/common/questionContainer/QuestionContainer.jsx';

class CompletedNomination extends Component {

  static propTypes = {
    nomination: PropTypes.object,
    possibleToVote: PropTypes.bool,
    possibleToSelect: PropTypes.bool,
    nominatedUser: PropTypes.object,
    addVote: PropTypes.func,
    possibleToSelectWinner: PropTypes.bool,
    isVotingMonth: PropTypes.bool,
  };

  static defaultProps = {
    nomination: {},
    possibleToVote: false,
    nominatedUser: {},
    addVote: () => {},
    possibleToSelectWinner: false,
    isVotingMonth: false,
  };

  constructor() {
    super();
    this.state = {
      questionType:'',
      showEditField: false,
      editFieldFocus: false,
      nominationReason: '',
    };
  };

  renderNomintation = (nomination)=>(
    <div className="nomination__text">
      {nomination}
    </div>
  );

  showQuestion = (questionType) => {
    this.setState({ questionType: questionType });
  };

  hideQuestion = () => {
    this.setState({ questionType: '' });
  };

  deleteNomination = () => {
    this.setState({questionType: ''});
    console.log('delete');
  };

  renderQuestion = () => {
    const { questionType } = this.state;
    const {possibleToVote, nominatedUser}  = this.props;
    const name = possibleToVote ? nominatedUser.get('name') : '';
    let question = {};
    let yesAction = () => {};
    if (questionType === 'vote') {
      question = () => (
        <p>Do you really want to vote for <br/> {name}?</p>
      );
      yesAction = this.props.addVote;
    } else if (questionType === 'delete') {
      question = () => (
        <p>Do you really want to delete?</p>
      );
      yesAction = this.deleteNomination;
    }
    return (
      <QuestionContainer
        question= {question()}
        yesAction={yesAction}
        noAction={this.hideQuestion}
      />
    );
  };

  renderVotingButtons = () => {
    return (
      <div className="buttons-container">
        <button className="button-sm light" onClick={() => this.showQuestion('vote')}>Vote</button>
      </div>
    )
  };

  openEditField = () => {
    this.setState({showEditField: true, nominationReason: this.props.nomination.get('nomination')})
  };

  closeEditField = () => {
    this.setState({showEditField: false, nominationReason: ''})
  }

  editNomination = () => {
    console.log('edit leci');
    this.setState({ showEditField: false })
  };

  onChangeHandler = (e) => {
    const textareaValue =  e.target.value;
    this.setState({ nominationReason: textareaValue });
  };

  onFocus =()=> {
    this.setState({ editFieldFocus: true });
    if(this.state.nominationReason==='Start typing...') {
      this.setState({ nominationReason: '' })
    }
  };

  onBlur= () => {
    this.setState({ editFieldFocus: false });
    if (this.state.nominationReason==='') {
      this.setState({ nominationReason: 'Start typing...'})
    }
  };

  renderEditField = () => {
    const {nominationReason} = this.state;
    const textAreaClasses = classNames({
      'textarea': true,
      'active': this.state.editFieldFocus,
    });

    return (
      <div className="textarea-wrapper">
        <textarea
          className={textAreaClasses}
          value={this.state.nominationReason}
          onChange={(e)=> this.onChangeHandler(e)}
          onFocus={() => this.onFocus()}
          onBlur={() => this.onBlur()}
          rows="9"
          cols="100"
          ref={(input) => { this.reasonInput = input; }}
          maxLength={400}
          >
        </textarea>
        <div className="buttons-container inside-input">
          <button className="button-sm light" onClick={()=> this.closeEditField()}>
            Cancel
          </button>
          <button
            className="button-sm wide"
            onClick={()=> this.editNomination()}
            disabled={nominationReason.length < 1 || nominationReason === 'Start typing...' }
          >
            Edit
          </button>
        </div>
      </div>
    )};


  renderSelectionControls = () => {
    const nomination = this.props.nomination;
    const author = nomination.get('author');
    const votes = nomination.get('votes');
    const {isVotingMonth} = this.props;
    return (
      <div className="selection-controls">
        <div className="info-container">
          <div className="info-record">
            Added by: <span>{author}</span>
          </div>
          <div className="info-record">
            Votes: <span>{votes}</span>
          </div>
        </div>
        {isVotingMonth &&
          <div className="buttons-container">
            <button className="button-sm medium-dark" onClick={() => this.showQuestion('delete')}>
              Delete
            </button>
            <CopyToClipboard
              text={nomination.get('nomination')}>
              <button className="button-sm light">
                Copy
              </button>
            </CopyToClipboard>
            <button className="button-sm dark" onClick={()=> {this.openEditField()}}>
              Edit
            </button>
          </div>
        }
      </div>
    )
  };

  renderCompletedNomination = () => {
    const { possibleToVote, nomination, possibleToSelectWinner } = this.props;
    const {showEditField} = this.state;
    return (
      <div className="completed-nomination-wrapper">
        {showEditField ?
          this.renderEditField() :
          <div className="completed-nomination">
            {this.renderNomintation(nomination.get('nomination'))}
            {possibleToVote && this.renderVotingButtons()}
            {possibleToSelectWinner && this.renderSelectionControls()}
          </div>
        }
      </div>
  )};

  render() {
    const { questionType } = this.state;
    return (
      <div>
        {(questionType ==='vote'|| questionType === 'delete') ?
          this.renderQuestion() :
          this.renderCompletedNomination()
        }
      </div>
    );
  }
}

export default CompletedNomination;
