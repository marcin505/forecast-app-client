import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
//import './NominationTextarea.css';

class NominationTextarea extends Component {

  static propTypes = {
    resetNominatedPersonId: PropTypes.func,
    setNominationAdded: PropTypes.func,
    addNomination: PropTypes.func.isRequired,
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
      nominationString: 'Tell everybody why you want to nominate',
      nominationReason: `Tell everybody why you want to nominate ${props.nominatedUser.get('name')}`
    };
  };

  isTextAreaInteracted = () => {
    let interacted = false;
    const { nominationReason } = this.state;
    if (nominationReason.slice(0, 39) === this.state.nominationString) {
      interacted = false;
    } else {
      interacted = true;
    }
    return interacted;
  };

  onChangeHandler = (e) => {
    this.setState({ nominationReason: e.target.value })
  };

  onFocus = () => {
    this.setState({ textAreaFocus: true });
    if (!this.isTextAreaInteracted()) {
      this.setState({nominationReason: ''});
    }
  };

  onBlur = () => {
    const { nominationReason } = this.state;
    const { nominatedUser } = this.props;
    this.setState({ textAreaFocus: false });
    if (nominationReason === '') {
      this.setState({
        nominationReason: `${this.state.nominationString} ${nominatedUser.get('name')}`
      })
    }
  };

  resetTextArea = () => {
    this.reasonInput.focus();
    this.setState({
      nominationReason: ''
    })
  };

  nominatePerson = (personId, nomination) => {
    this.props.resetNominatedPersonId();
    this.props.setNominationAdded({ nominationAdded: true });
    this.props.addNomination(personId, nomination);
    this.props.onNominate();
  };

  renderNominatingButtons = () => {
    const { nominationString, nominationReason } = this.state;
    const personId = this.props.nominatedUser.get('id');
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
          className="button-sm"
          onClick={()=> this.nominatePerson(personId, nominationReason)}
          disabled={nominationReason === '' || nominationReason.slice(0,39) === nominationString }
          >
          Nominate
        </button>
      </div>
    )
  };

  render() {
    const { nominationReason } = this.state;
    const textAreaClasses = classNames({
      'textarea': true,
      'active': this.state.textAreaFocus,
    });

    return (
      <div className="textarea-wrapper">
        <textarea
          className={textAreaClasses}
          value={nominationReason}
          onChange={(e)=> this.onChangeHandler(e)}
          onFocus={() => this.onFocus()}
          onBlur={() => this.onBlur()}
          rows="4" cols="100"
          ref={(input) => { this.reasonInput = input; }}
          maxLength={550}
        >
        </textarea>
        {this.renderNominatingButtons()}
      </div>
    )
  }
}

export default NominationTextarea;


