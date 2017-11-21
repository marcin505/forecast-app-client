import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  getVotingMonth,
} from 'redux/selectors/employeesSelectors.js';
import { raiseVotes } from 'redux/actions/employeesActions.js';
import CompletedNomination from 'components/common/completedNomination/CompletedNomination.jsx';
import NominationTextarea from 'components/common/nominationTextarea/NominationTextarea.jsx';
import JustificationTextarea from 'components/admin/justificationTextarea/JustificationTextarea.jsx';
import han_solo from 'assets/images/people/han_solo.png';
import './NominatedUserInfo.css';

class NominatedUserInfo extends Component {

  static propTypes = {
    nominatedUser: PropTypes.object.isRequired,
    collapseListView: PropTypes.func,
    setNominationAdded: PropTypes.func,
    possibleToVote: PropTypes.bool,
    possibleToSelectWinner: PropTypes.bool,
    votingMonth: PropTypes.string.isRequired,
    params: PropTypes.object,
    raiseVotes: PropTypes.func.isRequired,
  };

  static defaultProps = {
    possibleToVote: false,
    addVote: () => {},
    setNominationAdded: () => {},
    isVoteTextarea: false,
    isJustificationTextarea: false,
    textAreaFocus: false,
    possibleToSelectWinner: false,
    params: null,
  };

  constructor() {
    super();
    this.state = {
      isVoteTextarea: false,
      isSelected: false,
    }
  };

  expandTextArea = () => {
    this.setState({ isVoteTextarea: true });
  };

  collapseTextArea = () => {
    this.setState({ isVoteTextarea: false });
  };

  renderNominationTextArea = () => {
    const { nominatedUser} = this.props;
    return (
      <NominationTextarea
        nominatedUser={nominatedUser}
        setNominationAdded={this.props.setNominationAdded}
        onNominate={this.props.collapseListView}
        onCancel={this.collapseTextArea}
        addNomination={this.props.addNomination}
      />
    )
  };

  renderJustificationTextarea = () => {
    const {nominatedUser } = this.props;
    return (
      <div className="justification-wrapper">
        <JustificationTextarea
          nominatedUser={nominatedUser}
        />
      </div>
    )
  };

  render() {
    const isVotingMonth =
      this.props.params ?
      this.props.votingMonth === this.props.params.month :
        false;
    const {nominatedUser, addVote, possibleToVote, possibleToSelectWinner } = this.props;
    const { isVoteTextarea,  } = this.state;
    const name = nominatedUser.get('name');
    const nominations = nominatedUser.get('nominations');
    const surname = nominatedUser.get('surname');
    const sectionImageClasses = classNames({
      'section-image': true,
      'black': possibleToSelectWinner,
    });
    const mobileSectionImageClasses = classNames({
      'section-image mobile': true,
      'black': possibleToSelectWinner,
    });
    return (
      <div className="nominated-user-info">
        <img className={sectionImageClasses} src={han_solo} alt="e2"/>
        <div className="nominated-user-info__right-section">
          <h1>
            {`${name} ${surname}`}
          </h1>
          <img className={mobileSectionImageClasses} src={han_solo} alt="e2" />
          <div className="nominated-for-heading">
            Nominated for:
          </div>
          <div className="nominations-container">
              {nominations.map(record=> {
                const id = record.get('id');
                return (
                  <CompletedNomination
                    nomination={record}
                    nominatedUser={nominatedUser}
                    possibleToVote={possibleToVote}
                    addVote={addVote}
                    key={id}
                    possibleToSelectWinner={possibleToSelectWinner}
                    isVotingMonth={isVotingMonth}
                    raiseVotes = {this.props.raiseVotes}
                  />
                )
              })
            }
          </div>
          {isVoteTextarea && this.renderNominationTextArea()}
          {!possibleToVote && !isVoteTextarea && !possibleToSelectWinner &&
            <button className="btn thin" onClick={() =>this.expandTextArea()}>Nominate {name}</button>
          }
          {(possibleToSelectWinner && isVotingMonth)  && this.renderJustificationTextarea()}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
   raiseVotes : bindActionCreators(
      raiseVotes,
      dispatch,
   )
});

const mapStateToProps = state => ({
  votingMonth: getVotingMonth(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(NominatedUserInfo);
