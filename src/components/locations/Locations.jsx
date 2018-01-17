import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import SimpleMap from'components/simpleMap/SimpleMap';
import './Locations.css';

class Locations extends Component {

   static propTypes = {
      locations: PropTypes.object,
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
               <SimpleMap />
            </div>
         </div>
      )
   }
}

export default connect()(Locations);
