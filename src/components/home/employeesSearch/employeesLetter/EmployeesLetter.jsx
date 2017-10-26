import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EmployeesLetter.css';
import e2 from 'assets/images/people/han_solo.png';

class EmployeesLetter extends Component {

  static propTypes = {
    employees: PropTypes.object.isRequired,
    setNominatedPersonId: PropTypes.func.isRequired,
    letter: PropTypes.string.isRequired,
  };

  renderEmployeesList = employees => (
    <div className="employees-letter__list">
      {employees.map(record => {
        const id = record.get('id');
        const name = record.get('name');
        const surname = record.get('surname');
        return (
          <div className="image-record" key={id} onClick={() => this.props.setNominatedPersonId(id)}>
            <div className="image-record__heading">{`${name} ${surname}`}</div>
            <img className="image" src={e2} alt="e2"/>
            <div className="arrow"/>
          </div>
        )
      })}
    </div>
  );

  render() {
    const { employees, letter } = this.props;
    return (
      <div className="employees-letter" id={letter}>
        <div className="employees-letter__heading">
          {letter}
        </div>
        {this.renderEmployeesList(employees)}
      </div>
    )
  }
}

export default EmployeesLetter;