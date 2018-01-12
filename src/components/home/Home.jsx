import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {fromJS} from 'immutable';
import {
   getWeather,
} from 'redux/selectors/weatherSelectors.js';
import PropTypes from 'prop-types';
import {Element, scroller} from 'react-scroll';
import TransitionGroup from 'react-addons-transition-group';
import WeatherSearch from 'components/home/weatherSearch/WeatherSearch.jsx';
import SearchContainer from 'components/home/searchContainer/SearchContainer.jsx';
import Modal from 'components/common/modal/Modal.jsx';
import CityRecords from'components/home/cityRecords/CityRecords';
import './Home.css';
import { citySearch } from '../../redux/actions/locationsActions';

class Home extends Component {

   static propTypes = {
      weather: PropTypes.object.isRequired,
   };

   constructor() {
      super();
      this.state = {
         searchString: '',
         modalMessage: '',
         voteAdded: false,
         expandedSections: {},
         isModal: false,
      };
   };

   renderWeatherSearch = () => (
      <WeatherSearch
         weather={this.props.weather}
         expanded={this.state.expandedSections.WeatherSearch}
         setExpandedSections={this.setExpandedSections}
      >
      </WeatherSearch>
   );

   renderCitySearch = () => (
     <SearchContainer
        weather={this.props.weather}        
        expanded={this.state.expandedSections.CitySearch}
        setExpandedSections={this.setExpandedSections}      
        defaultPlaceHolder = {'Search the city'}
        searchName = {'CitySearch'}
     >
     <div>kurde balans</div>
     </SearchContainer>
   );

  resetExpandedSections = () => {
    const htmlCollection = ReactDOM.findDOMNode(this).children;
    const expArray = Array.prototype.slice.call(htmlCollection)
      .filter(element => element.className === 'expandable-section')
      .map(e => e.attributes[0].nodeValue);
    const expObject = expArray.reduce((obj, cur) => {
      obj[cur] = false;
      return obj;
    }, {})
    return expObject;
   }

   setExpandedSections = (section, value, scrollProperties) => {
      let expandedSections = this.resetExpandedSections();
      expandedSections = {...expandedSections, [section]: value};
      this.setState({expandedSections: expandedSections}, () => {
        console.log(67, this.state.expandedSections);
      });
      if (scrollProperties) {
        scroller.scrollTo(section, scrollProperties);
      }
   };
  
   handleModal = (isOpen, message) => {
      message = message ? message : '';
      this.setState({isModal: isOpen, modalMessage: message});
   };

   renderModal = (message) => (
      <Modal
         message={message}
         onClick={this.handleModal}
      />
   );

   componentDidMount() {
     this.setState({expandedSections: this.resetExpandedSections()})
   };

   render() {
     
      const { isModal} = this.state;
      return (
         <div className="home" id="home">
            <Element name='WeatherSearch' className="expandable-section">
              {this.renderWeatherSearch()}
            </Element>
            <Element name='CitySearch' className="expandable-section">
              {this.renderCitySearch()}
            </Element>
            <TransitionGroup>
               {isModal && this.renderModal(this.state.modalMessage)}
            </TransitionGroup>
         </div>
      );
   }
}

const mapStateToProps = state => ({
   weather: getWeather(state),
});

export default connect(mapStateToProps)(Home);
