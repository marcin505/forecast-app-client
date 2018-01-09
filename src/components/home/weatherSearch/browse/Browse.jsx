import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import { lettersArray } from 'components/common/utils/functionUtils.js';
import './Browse.css';
import CloseContainer from 'components/common/closeContainer/CloseContainer.jsx';
import WeatherLetter from 'components/home/weatherSearch/weatherLetter/WeatherLetter.jsx';


class Browse extends Component {
  static propTypes = {
    weather: PropTypes.object,
    closeAction: PropTypes.func.isRequired,
    ScrollLink: PropTypes.func.isRequired,
  };

  static defaultProps = {
    weather: []
  };

  scrollToTop = () => {
    Scroll.animateScroll.scrollToTop();
  };

  generateLetters = (weather) => {
    const { ScrollLink } = this.props;
    return (
    <div className="browse__letters">
      {lettersArray(weather).map((letter, index) => (
        <ScrollLink className="letter" to={letter} spy={true} smooth={true} duration={400} key={index} offset={-100}>
          {letter}
        </ScrollLink>
      ))}
    </div>
  )};

  generateLettersSections = (weather) => (
    lettersArray(weather)
      .map((letter, index) => (
        <WeatherLetter
          weather={this.getWeatherStartWithLetter(letter)}
          letter={letter}
          key={index}
        />
      ))
  );

  getWeatherStartWithLetter = letter => {
    const { weather } = this.props;
    return weather.filter(record => {
      return (record.get('surname').slice(0,1) === letter);
    });
  };

  closeWeatherSearch = () => {
    this.props.closeAction('weatherSearch', false);
  };
  
  render() {
    const { weather } = this.props;
    return (
      <div className="browse">
        {this.generateLetters(weather)}
        {this.generateLettersSections(weather)}
        <div className="bottom-container">
          <span onClick={() => this.scrollToTop()}>Scroll the top!</span>
          <CloseContainer
            closeAction={this.closeWeatherSearch}
          />
        </div>
      </div>
    )
  }
}

export default Browse;
