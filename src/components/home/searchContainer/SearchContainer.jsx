import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link as ScrollLink } from 'react-scroll';
import classNames from 'classnames';
import SearchInput from 'components/common/searchInput/SearchInput.jsx'
import SectionHeader from 'components/common/sectionHeader/SectionHeader.jsx';
import './SearchContainer.css';
import _ from 'lodash';

export class SearchContainer extends Component {

  static propTypes = {
    expanded: PropTypes.bool,
    setExpandedSections: PropTypes.func.isRequired,
    defaultPlaceholder: PropTypes.string.isRequired,
    searchName: PropTypes.string.isRequired,
    apiCallback: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    expanded: false,
  }

  constructor() {
    super();
    this.state = {
      searchString: '',
      expanded: false,
      placeholder: '',
    }
  };

  componentDidMount() {
    this.setState({ placeholder: this.props.defaultPlaceholder })
  }

  searchDebounce = (_.debounce(() => {
    const searchString = this.state.searchString.toLowerCase();
    if (this.state.searchString.length > 3) {
      this.props.apiCallback({ query: searchString });
    } 
  }, 500));


  onChangeInputHandler = (e) => {
    this.setState({ searchString: e.target.value }, () => {
      if (this.state.searchString.length > 3) {
        if (!this.props.loading) {
          this.searchDebounce();
        }
      } else {
        this.props.resetCallback();
      }
    });
  };

  keyPressHandler = (e) => {
    if (e.key === 'Enter'  && !this.props.loading) {
      this.props.apiCallback({ query: this.state.searchString });
    }
  }

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
    this.setState({ placeholder: '' });
    this.props.setExpandedSections(this.props.searchName, true, scrollProperties);
  };

  onBlur = () => {
    this.setState({ placeholder: this.props.defaultPlaceholder });
  };

  closeSearchMode = () => {
    this.setState({ searchString: '', placeholder: this.props.defaultPlaceholder });
    this.props.setExpandedSections(this.props.searchName, false);
    // this.setState({ foundRecords:fromJS([])});
  };

  createMarkersArray = () => {
    const markers = this.props.cities.get('cities');
    
  }

  render() {
    const { expanded } = this.props;
    const { placeholder } = this.state;
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
              heading={this.props.defaultPlaceholder}
            /> :
            <p className="heading-red-sm">
              {this.props.defaultPlaceholder}
            </p>
          }
          <SearchInput
            value={this.state.searchString}
            onChange={this.onChangeInputHandler}
            onKeyPress={this.keyPressHandler}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            resetStringHandler={this.resetSearchString}
            searchMode={expanded}
            placeholder={placeholder}
          />

          {expanded &&
            <div>
              {/* CityRecords */}
              {this.props.children}
            </div>
          }
        </div>
      </div>
    );
  }
}
export default SearchContainer;

