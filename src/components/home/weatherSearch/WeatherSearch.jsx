import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
    this.setState({ placeHolder: '', isBrowseAll: false });
    this.props.setExpandedSections('weatherSearch', true, scrollProperties);
  };

  onBlur = () => {
    this.setState({ placeHolder: 'Add your Nominee' });
  };

  closeSearchMode = () => {
    this.setState({ searchString: '',  placeHolder: 'Add your Nominee' });
    this.props.setExpandedSections('weatherSearch', false);
    this.setState({ foundRecords:fromJS([])});
  };

  openBrowseAll = () => {
    this.props.setExpandedSections('weatherSearch', true);
    this.setState({ isBrowseAll: true,  searchString: '', placeHolder: 'Add your Nominee', foundRecords:fromJS([]) });
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
    const { placeHolder, isBrowseAll } = this.state;

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

