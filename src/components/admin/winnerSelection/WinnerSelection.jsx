import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getEmployees,
} from 'redux/selectors/employeesSelectors.js';
import NominationsList from 'components/home/voteInfo/nominationsList/NominationsList.jsx';
import './WinnerSelection.css';

class WinnerSelection extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    employees: PropTypes.object,
  };

  static defaultProps = {
    employees: [],
  };

  getNominatedEmployees = () => {
    const { employees } = this.props;
    return employees.filter(user =>{
      return (user.get('nominations').size > 0)
    });
  };

  renderNominationsList = () =>  (
    <NominationsList
      nominatedEmployees={this.getNominatedEmployees()}
      possibleToVote={false}
      possibleToSelectWinner={true}
      params={this.props.match.params}
    />
  );

  render() {
    let {month, year } = this.props.match.params;
    return (
      <div className="winner-selection">
        <div className="content-wrapper">
          <div className="winner-selection__top">
            <h2>
              {`${month} ${year}`}
            </h2>
            <div className="heading-lg highlight">
              Winner selection
            </div>
          </div>
          {this.renderNominationsList()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  employees: getEmployees(state),
});

export default connect(mapStateToProps, null)(WinnerSelection);
