import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './CityRecords.css';
import { RingLoader } from 'react-spinners';

export default class CityRecords extends Component {

   static propTypes = {
      cities: PropTypes.object.isRequired,
      resetCallback: PropTypes.func.isRequired,
      loading: PropTypes.bool.isRequired,
   };

   componentWillUnmount() {
      this.props.resetCallback();
   }

   renderRecords = cities => (
      cities.map((rec, index) => (
         <div key={index} className="city-records__record">
            <div className="record__index">{`${index}.`}</div>
            <div className="record__localized-name">{rec.LocalizedName}</div>
            <div className="record__country">{rec.Country['EnglishName']}</div>
            <div className="record__admin-area">{rec.AdministrativeArea['LocalizedName']}</div>
            <div className="record__elevation">{`${rec.GeoPosition['Elevation'].Metric.Value}m`}</div>
         </div>
      ))
   );

   renderLoader = (loading) => (
      <RingLoader
         color={'#123abc'}
         loading={loading}
      />
   )

   render() {
      const cities = this.props.cities.toJS();
      const {loading} = this.props;
      return (
         <div className="city-records">
                  <div className="city-records__labels">
                     <div className="label__index">Index</div>
                     <div className="label__localized-name">Name</div>
                     <div className="label__country">Country</div>
                     <div className="label__admin-area">Admin</div>
                     <div className="label__elevation">Elevation</div>
                  </div>
               {loading? this.renderLoader(loading): this.renderRecords(cities)  }
         </div>
      )
   }
};

