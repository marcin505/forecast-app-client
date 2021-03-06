import React, { Component } from 'react';
import { fromJS } from 'immutable';
import PropTypes from 'prop-types';
import { Link as ScrollLink } from 'react-scroll';
import SearchInput from 'components/common/searchInput/SearchInput.jsx'
import WeatherSearchResults from 'components/home/weatherSearch/weatherSearchResults/WeatherSearchResults.jsx'
import Browse from 'components/home/weatherSearch/browse/Browse.jsx';
import SectionHeader from 'components/common/sectionHeader/SectionHeader.jsx';
import classNames from 'classnames';
import './WeatherSearch.css';
import _ from 'lodash';

export class WeatherSearch extends Component {

  static propTypes = {
    weather: PropTypes.object.isRequired,
    expanded: PropTypes.bool,
    setExpandedSections: PropTypes.func.isRequired,
  };

  static defaultProps = {
    expanded: false,
  }

  constructor() {
    super();
    this.state = {
      searchString : '',
      expanded: false,
      placeholder: 'Search the weather',
      foundRecords: fromJS([]),
      isBrowseAll: false,
    }
  };

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
    this.setState({ searchString: '', placeholder: '', foundRecords:fromJS([])});
  };

  onFocus = ()  => {
    const scrollProperties = {
      duration: 400,
      smooth: true,
      offset: -50,
    };
    this.setState({ placeholder: '', isBrowseAll: false });
    this.props.setExpandedSections('WeatherSearch', true, scrollProperties);
  };

  onBlur = () => {
    this.setState({ placeholder: 'Search your weather' });
  };

  closeSearchMode = () => {
    this.setState({ searchString: '',  placeholder: 'Search your weather' });
    this.props.setExpandedSections('WeatherSearch', false);
    this.setState({ foundRecords:fromJS([])});
  };

  openBrowseAll = () => {
    this.props.setExpandedSections('WeatherSearch', true);
    this.setState({ isBrowseAll: true,  searchString: '', placeholder: 'Bang Bang', foundRecords:fromJS([]) });
  };

  renderBrowseAll = () => (
    <Browse
      weather={this.props.weather}
      closeAction={this.props.setExpandedSections}
      ScrollLink={ScrollLink}
    />
  );

  render() {
    const { expanded } = this.props;
    const { placeholder, isBrowseAll } = this.state;

    const weatherSearchClasses = classNames({
      'weather-search': true,
      'weather-search--dark': expanded,
      'weather-search--additional-padding': expanded,
    });

    return (
      <div className={weatherSearchClasses} id="weather-search">
        <div className="content-wrapper">
          {expanded ?
          <SectionHeader
            closeAction={this.closeSearchMode}
            heading={'Search your weather'}
            /> :
            <p className="heading-red-sm">
                Search your weather
            </p>
          }
          <SearchInput
              value={this.state.searchString}
              onChange={this.onChangeInputHandler}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              resetStringHandler={this.resetSearchString}
              searchMode={expanded}
              placeholder={placeholder}
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
            <WeatherSearchResults
              weather={this.state.foundRecords}
            />
            {isBrowseAll && this.renderBrowseAll()}
          </div>
          }
        </div>
      </div>
    );
  }
}

export default WeatherSearch;

