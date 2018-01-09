import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageRecord from 'components/common/imageRecord/ImageRecord.jsx'
import './WeatherSearchResults.css';

class WeatherSearchResults extends Component {

  static propTypes = {
    weather: PropTypes.object.isRequired,
  };

  renderWeatherList = (weather) => (
    <div className="weather-search__list">
      {weather.map((record, index) =>(
          <ImageRecord
            user={record}
            key={index}
          />
        )
      )}
    </div>
  );

  render() {
    const { weather } = this.props;
    return (
      <div className="weather-search-results">
          {this.renderWeatherList(weather)}
      </div>
    )
  }
}

export default WeatherSearchResults;