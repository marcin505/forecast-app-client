import React, { Component } from 'react';
import { fromJS } from 'immutable';
import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';
import SearchInput from 'components/common/searchInput/SearchInput.jsx'
import WeatherSearchResults from 'components/home/weatherSearch/weatherSearchResults/WeatherSearchResults.jsx'
import SectionHeader from 'components/common/sectionHeader/SectionHeader.jsx';
import classNames from 'classnames';
import './SearchContainer.css';
import _ from 'lodash';

export class SearchContainer extends Component {

  static propTypes = {
    weather: PropTypes.object.isRequired,
    expanded: PropTypes.bool,
    setExpandedSections: PropTypes.func.isRequired,
    defaultPlaceHolder: PropTypes.string.isRequired,
    searchName: PropTypes.string.isRequired,
  };

  static defaultProps = {
    expanded: false,
  }
  
  constructor() {
    super();
    this.state = {
      searchString : '',
      expanded: false,
      placeHolder: '',
      foundRecords: fromJS([]),
    }
  };
  
  componentDidMount() {
    this.setState({placeHolder: this.props.defaultPlaceHolder})
  }

  searchWeather = _.debounce(() => {
    const {weather} = this.props;
      let foundRecords = weather.filter(record => {
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
    this.searchWeather();
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
    this.setState({ placeHolder: ''});
    this.props.setExpandedSections(this.props.searchName, true, scrollProperties);
  };

  onBlur = () => {
    this.setState({ placeHolder: this.props.defaultPlaceHolder });
  };

  closeSearchMode = () => {
    this.setState({ searchString: '',  placeHolder: this.props.defaultPlaceHolder });
    this.props.setExpandedSections(this.props.searchName, false);
    this.setState({ foundRecords:fromJS([])});
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
             <WeatherSearchResults
              weather={this.state.foundRecords}
            /> 
     
          </div>
          }
        </div>
      </div>
    );
  }
}
export default SearchContainer;

