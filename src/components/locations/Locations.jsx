import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Locations.css';

class Locations extends Component {

   static propTypes = {
      locations: PropTypes.object,
      citySearch: PropTypes.func.isRequired,
   };

   static defaultProps = {

   };

   componentDidMount () {
      this.props.citySearch({query: 'Krak'})
   }

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

export default Locations;
