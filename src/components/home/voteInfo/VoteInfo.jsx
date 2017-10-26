import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TransitionGroup from 'react-addons-transition-group';
import CloseContainer from 'components/common/closeContainer/CloseContainer.jsx';
import NominationsList from 'components/home/voteInfo/nominationsList/NominationsList.jsx';
import './VoteInfo.css';

class VoteInfo extends Component {

  static propTypes = {
    voted: PropTypes.bool.isRequired,
    votingMonth: PropTypes.string.isRequired,
    votingYear: PropTypes.number.isRequired,
    nominatedEmployees: PropTypes.object,
    addVote: PropTypes.func.isRequired,
    expanded: PropTypes.bool.isRequired,
    setExpandedSections: PropTypes.func.isRequired,
};

  static defaultProps = {
    nominatedEmployees: [],
  };

  expandVoteView = () => {
    const scrollProperties = {
      duration: 400,
      smooth: true,
      offset: -50,
    };
    this.props.setExpandedSections('voteInfo', true, scrollProperties);
  };

  collapseVoteView = () => {
    this.props.setExpandedSections('voteInfo', false);
  };

  renderCloseContainer = () => (
    <CloseContainer
      closeAction={this.collapseVoteView}
    />
  );

  renderNominationsList = () =>  (
    <NominationsList
      nominatedEmployees={this.props.nominatedEmployees}
      addVote={this.props.addVote}
      closeAction={this.collapseVoteView}
    />
  );

  render() {
    const { voted, votingMonth, votingYear, expanded } = this.props;
    const bgClasses = classNames({
      'vote-info': true,
      'vote-info--dark': this.props.expanded,
    });

    const bigHeadingClassNames = classNames({
      'heading-lg': true,
      'highlight': this.props.expanded,
    });

    return(
      <div className={bgClasses}>
        <div className="content-wrapper">
          <div className="vote-info__top">
            <div className="col-1">
              <h2>
                {`${votingMonth} ${votingYear}`}
              </h2>
              <p className="heading-red-sm">
                {voted ? 'You voted' : 'You didn\'t vote yet'}
              </p>
              <div className={bigHeadingClassNames} onClick={()=> this.expandVoteView()}>
                Vote
              </div>
            </div>
            {expanded && this.renderCloseContainer() }
          </div>
          <TransitionGroup>
            {expanded && this.renderNominationsList() }
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default VoteInfo;