import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {citySearch} from 'redux/actions/locationsActions.js';
import './Locations.css';

class Locations extends Component {

   static propTypes = {
      locations: PropTypes.object,
      citySearch: PropTypes.func.isRequired,
   };

   static defaultProps = {
        locations: {},
   };

   render() {
      return (
         <div className="locations">
            <div className="content-wrapper">
               <h1 className="heading-lg semi-bold">
                  Locations
               </h1>
               <hr/>
            </div>
         </div>
      )
   }
}
const mapDispatchToProps = dispatch => ({
    citySearch: bindActionCreators(citySearch, dispatch)
 });

export default connect(null, mapDispatchToProps)(Locations);
