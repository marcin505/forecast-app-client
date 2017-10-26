import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import { lettersArray } from 'components/common/utils/functionUtils.js';
import './Browse.css';
import CloseContainer from 'components/common/closeContainer/CloseContainer.jsx';
import EmployeesLetter from 'components/home/employeesSearch/employeesLetter/EmployeesLetter.jsx';


class Browse extends Component {
  static propTypes = {
    employees: PropTypes.object,
    setNominatedPersonId: PropTypes.func.isRequired,
    closeAction: PropTypes.func.isRequired,
    ScrollLink: PropTypes.func.isRequired,
  };

  static defaultProps = {
    employees: []
  };

  scrollToTop = () => {
    Scroll.animateScroll.scrollToTop();
  };

  generateLetters = (employees) => {
    const { ScrollLink } = this.props;
    return (
    <div className="browse__letters">
      {lettersArray(employees).map((letter, index) => (
        <ScrollLink className="letter" to={letter} spy={true} smooth={true} duration={400} key={index} offset={-100}>
          {letter}
        </ScrollLink>
      ))}
    </div>
  )};

  generateLettersSections = (employees) => (
    lettersArray(employees)
      .map((letter, index) => (
        <EmployeesLetter
          employees={this.getEmployeesStartWithLetter(letter)}
          setNominatedPersonId={this.props.setNominatedPersonId}
          letter={letter}
          key={index}
        />
      ))
  );

  getEmployeesStartWithLetter = letter => {
    const { employees } = this.props;
    return employees.filter(record => {
      return (record.get('surname').slice(0,1) === letter);
    });
  };

  closeEmployeesSearch = () => {
    this.props.closeAction('employeesSearch', false);
  };
  
  render() {
    const { employees } = this.props;
    return (
      <div className="browse">
        {this.generateLetters(employees)}
        {this.generateLettersSections(employees)}
        <div className="bottom-container">
          <span onClick={() => this.scrollToTop()}>Scroll the top!</span>
          <CloseContainer
            closeAction={this.closeEmployeesSearch}
          />
        </div>
      </div>
    )
  }
}

export default Browse;
