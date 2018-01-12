import React, {Component} from 'react';
import {fromJS} from 'immutable';
import PropTypes from 'prop-types';
import './CityRecords.css';

export default class CityRecords extends Component {

   static propTypes = {
      cities: PropTypes.object,
   };

   static defaultProps = {
        cities: fromJS([])
   };

   render() {
      return (
         <div className="city-records">
              <h3>City search results:</h3>
               {
                  this.props.cities.map((k, index) => (
                    <div key={index} className="city-records__record">
                       <div>
                        {k.get('EnglishName')}
                       </div>
                    </div>
                 ))
               }
         </div>
      )
   }
};
