import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fromJS} from 'immutable';
import {
   getEmployees,
} from 'redux/selectors/employeesSelectors.js';
// import {} from 'redux/actions/employeesActions.js';
import PropTypes from 'prop-types';
import {Element, scroller} from 'react-scroll';
import TransitionGroup from 'react-addons-transition-group';
import {defaultScrollProperties} from 'components/common/utils/functionUtils.js';
import EmployeesSearch from 'components/home/employeesSearch/EmployeesSearch.jsx';
import Modal from 'components/common/modal/Modal.jsx';
import './Home.css';

class Home extends Component {

   static propTypes = {
      employees: PropTypes.object.isRequired,
   };

   constructor() {
      super();
      this.state = {
         searchString: '',
         modalMessage: '',
         voteAdded: false,
         expandedSections: this.resetExpandedSections(),
         isModal: false,
      };
   };

   resetExpandedSections = () => (fromJS({
      employeesSearch: false,
   }));

   renderEmployeesSearch = () => (
      <EmployeesSearch
         employees={this.props.employees}
         expanded={this.state.expandedSections.toJS().employeesSearch}
         setExpandedSections={this.setExpandedSections}
      />
   );

   setExpandedSections = (section, value, scrollProperties) => {
      let expandedSections = this.resetExpandedSections();
      expandedSections = expandedSections.set([section], value);
      this.setState({expandedSections: expandedSections});
      if (document.getElementById('nominations-list')) {
         //const listHeight = `${document.getElementById('nominations-list').clientHeight}px`;
         //console.log(110, listHeight);
         //document.getElementById('nominations-list').style.height = '0px';
         setTimeout(() => {
            scroller.scrollTo(section, scrollProperties)
         }, 600);
      } else {
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

   render() {

      const { isModal} = this.state;
      return (
         <div className="home">
            <Element name="employeesSearch">
              {this.renderEmployeesSearch()}
            </Element>
            <TransitionGroup>
               {isModal && this.renderModal(this.state.modalMessage)}
            </TransitionGroup>
         </div>
      );
   }
}

// const mapDispatchToProps = dispatch => ({
//    setNominatedPersonId: bindActionCreators(
//       setNominatedPersonId,
//       dispatch,
//    ),
// });

const mapStateToProps = state => ({
   employees: getEmployees(state),
});

export default connect(mapStateToProps)(Home);
