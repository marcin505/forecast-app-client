import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WeatherLetter.css';
import e2 from 'assets/images/people/han_solo.png';

class WeatherLetter extends Component {

  static propTypes = {
    weather: PropTypes.object.isRequired,
    letter: PropTypes.string.isRequired,
  };
  renderWeatherList = weather => (
    <div className="weather-letter__list">
      {weather.map(record => {
        const id = record.get('id');
        const name = record.get('name');
        const surname = record.get('surname');
        return (
          <div className="image-record" key={id}>
            <div className="image-record__heading">{`${name} ${surname}`}</div>
            <img className="image" src={e2} alt="e2"/>
            <div className="arrow"/>
          </div>
        )
      })}
    </div>
  );

  render() {
    const { weather, letter } = this.props;
    return (
      <div className="weather-letter" id={letter}>
        <div className="weather-letter__heading">
          {letter}
        </div>
        {this.renderWeatherList(weather)}
      </div>
    )
  }
}

export default WeatherLetter;