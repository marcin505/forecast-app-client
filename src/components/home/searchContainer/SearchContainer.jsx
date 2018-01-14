import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link as ScrollLink } from 'react-scroll';
import SearchInput from 'components/common/searchInput/SearchInput.jsx'
import SectionHeader from 'components/common/sectionHeader/SectionHeader.jsx';
import classNames from 'classnames';
import './SearchContainer.css';
import _ from 'lodash';

export class SearchContainer extends Component {

  static propTypes = {
    expanded: PropTypes.bool,
    setExpandedSections: PropTypes.func.isRequired,
    defaultPlaceHolder: PropTypes.string.isRequired,
    searchName: PropTypes.string.isRequired,
    apiCallback: PropTypes.func.isRequired,
    resetCallback: PropTypes.func.isRequired,
  };

  static defaultProps = {
    expanded: false,
  }

  constructor() {
    super();
    this.state = {
      searchString: '',
      expanded: false,
      placeHolder: '',
    }
  };

  componentDidMount() {
    this.setState({ placeHolder: this.props.defaultPlaceHolder })
  }

  searchDebounce = (_.debounce(() => {
    const searchString = this.state.searchString.toLowerCase();
    if (this.state.searchString.length > 3) {
      this.props.apiCallback({ query: searchString });
    } 
  }, 1000));


  onChangeInputHandler = (e) => {
    this.setState({ searchString: e.target.value }, () => {
      if (this.state.searchString.length > 3) {
        this.searchDebounce();
      } else {
        this.props.resetCallback();
        console.log('reset leci');
      }
    });
  };

  resetSearchString = () => {
    this.setState({ searchString: '' });
    this.props.resetCallback();
  };

  onFocus = () => {
    const scrollProperties = {
      duration: 400,
      smooth: true,
      offset: -50,
    };
    this.setState({ placeHolder: '' });
    this.props.setExpandedSections(this.props.searchName, true, scrollProperties);
  };

  onBlur = () => {
    this.setState({ placeHolder: this.props.defaultPlaceHolder });
  };

  closeSearchMode = () => {
    this.setState({ searchString: '', placeHolder: this.props.defaultPlaceHolder });
    this.props.setExpandedSections(this.props.searchName, false);
    // this.setState({ foundRecords:fromJS([])});
  };

  render() {
    const { expanded } = this.props;
    const { placeHolder } = this.state;
    const weatherSearchClasses = classNames({
      'search-container': true,
      'search-container--dark': expanded,
      'search-container--additional-padding': expanded,
    });

    return (
      <div className={weatherSearchClasses}>
        <div className="content-wrapper">
          {expanded ?
            <SectionHeader
              closeAction={this.closeSearchMode}
              heading={this.props.defaultPlaceHolder}
            /> :
            <p className="heading-red-sm">
              {this.props.defaultPlaceHolder}
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

          {expanded &&
            <div>
              {this.props.children}
            </div>
          }
        </div>
      </div>
    );
  }
}
export default SearchContainer;

