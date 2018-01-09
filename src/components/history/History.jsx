import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWeatherReducer } from 'redux/selectors/weatherSelectors.js';
import HistoryUser from 'components/history/historyUser/HistoryUser.jsx';
import './History.css';

class History extends Component {

  static propTypes = {
    history: PropTypes.object,
  };

  static defaultProps = {
    history: []
  };

  renderHistoryList = (history) => (
    <div className="history-content">
      {history.map((record, index) => (
        <HistoryUser
          user={record}
          key={index}
        />
      ))}
    </div>
  );

  render() {
    const {history} = this.props;
    return (
      <div className="history">
          <div className="content-wrapper">
              <h1 className="heading-lg semi-bold">
                History
              </h1>
            {this.renderHistoryList(history)}
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  history: getWeatherReducer(state).get('history'),
});

export default connect(mapStateToProps, null)(History);
