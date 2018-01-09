import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fromJS } from 'immutable';
import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';
import { setNominatedPersonId } from 'redux/actions/employeesActions.js';
import SearchInput from 'components/common/searchInput/SearchInput.jsx'
import EmployeesSearchResults from 'components/home/employeesSearch/employeesSearchResults/EmployeesSearchResults.jsx'
import Browse from 'components/home/employeesSearch/browse/Browse.jsx';
import SectionHeader from 'components/common/sectionHeader/SectionHeader.jsx';
import classNames from 'classnames';
import './EmployeesSearch.css';
import _ from 'lodash';

export class EmployeesSearch extends Component {

  static propTypes = {
    employees: PropTypes.object.isRequired,
    expanded: PropTypes.bool.isRequired,
    setExpandedSections: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      searchString : '',
      expanded: false,
      placeHolder: 'Add your nominee',
      foundRecords: fromJS([]),
      isBrowseAll: false,
    }
  };

  searchEmployees = _.debounce(() => {
    const {employees} = this.props;
      let foundRecords = employees.filter(record => {
        const surname =record.get('surname');
        const name = record.get('name');
        const user = `${name} ${surname}`.toLowerCase();
        const searchString = this.state.searchString.toLowerCase();
        let searchResult = () => {};
        if(searchString.length > 1) {
          searchResult = () => (
            user.indexOf(searchString) !== -1
          );
        } else {
          searchResult = () => (null);
        }
        return searchResult();
      });
    this.setState({foundRecords});
  }, 500);

  onChangeInputHandler = (e) => {
    this.setState({ searchString : e.target.value });
    this.searchEmployees();
  };

  resetSearchString = () => {
    this.setState({ searchString: '', placeHolder: '', foundRecords:fromJS([])});
  };

  onFocus = ()  => {
    const scrollProperties = {
      duration: 400,
      smooth: true,
      offset: -50,
    };
    this.setState({ placeHolder: '', isBrowseAll: false });
    this.props.setExpandedSections('employeesSearch', true, scrollProperties);
  };

  onBlur = () => {
    this.setState({ placeHolder: 'Add your Nominee' });
  };

  closeSearchMode = () => {
    this.setState({ searchString: '',  placeHolder: 'Add your Nominee' });
    this.props.setExpandedSections('employeesSearch', false);
    this.setState({ foundRecords:fromJS([])});
  };

  openBrowseAll = () => {
    this.props.setExpandedSections('employeesSearch', true);
    this.setState({ isBrowseAll: true,  searchString: '', placeHolder: 'Add your Nominee', foundRecords:fromJS([]) });
  };

  renderBrowseAll = () => (
    <Browse
      employees={this.props.employees}
      setNominatedPersonId={this.setNominatedPersonId}
      closeAction={this.props.setExpandedSections}
      ScrollLink={ScrollLink}
    />
  );

  render() {
    const { expanded } = this.props;
    const { placeHolder, isBrowseAll } = this.state;

    const employeesSearchClasses = classNames({
      'employees-search': true,
      'employees-search--dark': expanded,
      'employees-search--additional-padding': expanded,
    });

    return (
      <div className={employeesSearchClasses} id="employees-search">
        <div className="content-wrapper">
          {expanded ?
          <SectionHeader
            closeAction={this.closeSearchMode}
            heading={'Start typing to search for a nominee'}
            /> :
            <p className="heading-red-sm">
                Add your nomination
            </p>
          }
          <SearchInput
              value={this.state.searchString}
              onChange={this.onChangeInputHandler}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              resetStringHandler={this.resetSearchString}
              searchMode={expanded}
              placeHolder={placeHolder}
          />
          <div className="browse-all-wrapper" id="browse">
            <ScrollLink
              className="browse-all-link"
              onClick={() =>this.openBrowseAll()}
              to={"browse"}
              spy={true}
              smooth={true}
              duration={800}
              offset={20}
            >
              Browse all
            </ScrollLink>
          </div>
          {expanded &&
          <div className="">
            <EmployeesSearchResults
              employees={this.state.foundRecords}
              setNominatedPersonId={this.setNominatedPersonId}
            />
            {isBrowseAll && this.renderBrowseAll()}
          </div>
          }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setNominatedPersonId: bindActionCreators(
    setNominatedPersonId,
    dispatch,
  )
});

export default connect(null, mapDispatchToProps)(EmployeesSearch);

