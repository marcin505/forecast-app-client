import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TweenMax } from "gsap";
import NominatedUserInfo from 'components/common/nominatedUserInfo/NominatedUserInfo.jsx';
import CloseContainer from 'components/common/closeContainer/CloseContainer.jsx';
import './NominationsList.css';
class NominationsList extends Component {

  static propTypes = {
    nominatedEmployees: PropTypes.object,
    possibleToVote: PropTypes.bool,
    possibleToSelectWinner: PropTypes.bool,
    addVote: PropTypes.func,
    setNominationAdded: PropTypes.func,
    resetNominatedPersonId: PropTypes.func,
    closeAction: PropTypes.func,
    params:PropTypes.object,
    addNomination: PropTypes.func,
  };

  static defaultProps = {
    nominatedEmployees: [],
    possibleToVote: true,
    possibleToSelectWinner: false,
    addVote: () => {},
    setNominationAdded: () => {},
    resetNominatedPersonId: () => {},
    addNomination: () => {},
    closeAction: null,
    params: null,
  };

  componentDidMount() {
    //const listIdHeight = `${document.getElementById('nominations-list').clientHeight}px`;
    //document.getElementById('nominations-list').style.height = listIdHeight;
  }

  componentWillEnter (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.5, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
  }

  componentWillLeave (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.5, {y: 0, opacity: 1}, {y: -50, opacity: 0, onComplete: callback});
  }

  renderCloseContainer = () => (
    <CloseContainer
      closeAction={this.props.closeAction}
    />
  );

  render() {
    const { addVote, possibleToVote, closeAction, possibleToSelectWinner } = this.props;

    return (
      <div className="nominations-list" id="nominations-list"ref={c => this.container = c}>
        <div className="nominations-list__header">
          <div className="nominations-list__heading">List of Nominations</div>
        </div>
        <div className="list">
          {
            this.props.nominatedEmployees.map(user => {
                const id = user.get('id');
                return (
                  <NominatedUserInfo
                    key={id}
                    nominatedUser={user}
                    possibleToVote={possibleToVote}
                    addVote={addVote}
                    possibleToSelectWinner={possibleToSelectWinner}
                    params={this.props.params}
                    addNomination={this.props.addNomination}
                  />
                )
              }
            )
          }
        </div>
        <div className="bottom-container">
          {closeAction && this.renderCloseContainer()}
        </div>
      </div>
    );
  }
}

export default NominationsList;


