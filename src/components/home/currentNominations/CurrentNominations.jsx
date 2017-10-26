import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TransitionGroup from 'react-addons-transition-group';
import CloseContainer from 'components/common/closeContainer/CloseContainer.jsx';
import NominationsList from 'components/home/voteInfo/nominationsList/NominationsList.jsx';
import './CurrentNominations.css';

class CurrentNominations extends Component {

  static propTypes = {
    voted: PropTypes.bool.isRequired,
    votingMonth: PropTypes.string.isRequired,
    votingYear: PropTypes.number.isRequired,
    nominatedEmployees: PropTypes.object,
    addNomination: PropTypes.func.isRequired,
    setNominationAdded: PropTypes.func.isRequired,
    resetNominatedPersonId: PropTypes.func.isRequired,
    setExpandedSections: PropTypes.func.isRequired,
    expanded: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    nominatedEmployees: [],
  };

  expandListView = () => {
    const scrollProperties = {
      duration: 400,
      smooth: true,
      offset: -50,
    };
    this.props.setExpandedSections('currentNominations', true, scrollProperties);
  };

  collapseListView = () => {
    this.props.setExpandedSections('currentNominations', false);
  };

  renderCloseContainer = () => (
    <CloseContainer
      closeAction={this.collapseListView}
    />
  );

  renderList = () => {
    const { nominatedEmployees, addNomination, setNominationAdded, resetNominatedPersonId } = this.props;
    return (
      <NominationsList
        nominatedEmployees={nominatedEmployees}
        addNomination={addNomination}
        setNominationAdded={setNominationAdded}
        resetNominatedPersonId={resetNominatedPersonId}
        possibleToVote={false}
        closeAction={this.collapseListView}
      />
    )
  };

  render() {
    const { votingMonth, votingYear, expanded } = this.props;
    const bgClasses = classNames({
      'current-nominations': true,
      'current-nominations--dark': expanded,
    });
    const bigHeadingClassNames = classNames({
      'heading-lg': true,
      'highlight': expanded,
    });

    return(
      <div className={bgClasses}>
        <div className="content-wrapper">
          <div className="current-nominations__top">
            <div className="col-1">
              <h2>
                {`${votingMonth} ${votingYear}`}
              </h2>
              <p className="heading-red-sm">
                Check nominations
              </p>
              <div className={bigHeadingClassNames} onClick={()=> this.expandListView()}>
                Current Nominations
              </div>
            </div>
            {expanded && this.renderCloseContainer()}
          </div>
          <TransitionGroup>
            {expanded && this.renderList()}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default CurrentNominations;