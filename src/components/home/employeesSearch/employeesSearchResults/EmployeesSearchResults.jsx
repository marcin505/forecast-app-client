import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageRecord from 'components/common/imageRecord/ImageRecord.jsx'
import './EmployeesSearchResults.css';

class EmployeesSearchResults extends Component {

  static propTypes = {
    employees: PropTypes.object.isRequired,
    setNominatedPersonId: PropTypes.func.isRequired,
  };

  renderEmployeesList = (employees) => (
    <div className="employees-search__list">
      {employees.map((record, index) =>(
          <ImageRecord
            user={record}
            key={index}
            setNominatedPersonId={this.props.setNominatedPersonId}
          />
        )
      )}
    </div>
  );

  render() {
    const { employees } = this.props;
    return (
      <div className="employees-search-results">
          {this.renderEmployeesList(employees)}
      </div>
    )
  }
}

export default EmployeesSearchResults;