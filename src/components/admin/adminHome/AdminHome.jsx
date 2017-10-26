import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ADMIN_WINNER } from 'routes/routesDefinitions.js'
import './AdminHome.css';

class AdminHome extends Component {

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'].reverse();
  generateMonths = () => {
    const year = 2017;
    return (
      this.months.map((month, index) => (
        <Link to={`${ADMIN_WINNER}/${month}/${year}`} className="admin-home__month-link" key={index}>
          {month}
        </Link>
      ))
    );
  };

  render() {
    return (
      <div className="admin-home">
        <div className="content-wrapper">
          <div className="admin-home__top">
            <div className="col-1">
              <h2 className="admin-home__heading">
                2017
              </h2>

              <p className="heading-red-sm">
                Current voting
              </p>
              <Link to={`${ADMIN_WINNER}/September/2017`} className="admin-home__month-link">
                September
              </Link>
            </div>
          </div>
          <div className="admin-home__months-wrapper">
            <p className="heading-red-sm">
              Previous votings
            </p>
            {this.generateMonths()}
          </div>
          <div className="admin-home__months-wrapper">
            <h2 className="admin-home__heading">
              2016
            </h2>
            <Link to={`${ADMIN_WINNER}/september/2017`} className="admin-home__month-link">
              December
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminHome;