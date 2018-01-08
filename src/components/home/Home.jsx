import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fromJS} from 'immutable';
import HOC from 'components/HOC/HOC.jsx';
import {
   getEmployees,
   getNominatedPersonId,
   getNominationAdded,
   getVotingMonth,
   getEmployeesReducer,
} from 'redux/selectors/employeesSelectors.js';
import {setNominatedPersonId, setNominationAdded, addNomination} from 'redux/actions/employeesActions.js';
// import immutableExamples from 'components/common/utils/immutableExamples';
import PropTypes from 'prop-types';
import {Element, scroller} from 'react-scroll';
import TransitionGroup from 'react-addons-transition-group';
import {defaultScrollProperties} from 'components/common/utils/functionUtils.js';
import VoteInfo from 'components/home/voteInfo/VoteInfo.jsx';
import CurrentNominations from 'components/home/currentNominations/CurrentNominations.jsx';
import EmployeesSearch from 'components/home/employeesSearch/EmployeesSearch.jsx';
import NominateUser from 'components/home/nominateUser/NominateUser.jsx';
import VotingCallMessage from 'components/home/messages/VotingCallMessage.jsx';
import Modal from 'components/common/modal/Modal.jsx';
import './Home.css';

class Home extends Component {

   static propTypes = {
      employees: PropTypes.object.isRequired,
      setNominatedPersonId: PropTypes.func.isRequired,
      setNominationAdded: PropTypes.func.isRequired,
      nominationAdded: PropTypes.bool.isRequired,
      votingMonth: PropTypes.string.isRequired,
      votingYear: PropTypes.number.isRequired,
   };

   constructor() {
      super();
      this.state = {
         searchString: '',
         modalMessage: '',
         voteAdded: false,
         nominationAdded: false,
         expandedSections: this.resetExpandedSections(),
         isModal: false,
      };
   };

   componentDidMount() {
      // immutableExamples();
   }

   resetExpandedSections = () => (fromJS({
      voteInfo: false,
      currentNominations: false,
      employeesSearch: false,
   }));

   resetNominatedPersonId = () => {
      scroller.scrollTo('voteInfo', defaultScrollProperties);
      setTimeout(() => {
            this.setExpandedSections('employeesSearch', false);
            this.handleModal(true, `Your nomination for ${this.props.votingMonth} has been added`);
         }, 800
      );
      this.props.setNominatedPersonId({personId: null});
   };

   renderNominateUser = () => {
      const {employees, nominatedPersonId, setNominationAdded} = this.props;
      const nominatedUser = employees.find(record => (
         nominatedPersonId === record.get('id')
      ));
      return (
         <NominateUser
            resetNominatedPersonId={this.resetNominatedPersonId}
            nominatedUser={nominatedUser}
            setNominationAdded={setNominationAdded}
            addNomination={this.addNomination}
         >
         </NominateUser>
      );
   };

   renderEmployeesSearch = () => (
      <EmployeesSearch
         employees={this.props.employees}
         setNominationAdded={this.props.setNominationAdded}
         expanded={this.state.expandedSections.toJS().employeesSearch}
         setExpandedSections={this.setExpandedSections}
      />
   );

   getNominatedEmployees = () => {
      const {employees} = this.props;
      return employees.filter(user => {
         return (user.get('nominations').size > 0)
      });
   };

   addVote = () => {
      this.setState({voteAdded: true});
   };

   addNomination = (personId, nomination) => {
      this.props.addNomination({personId, nomination})
   };

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

   renderVotingCallMessage = (votingMonth) => (
      <VotingCallMessage
         votingMonth={votingMonth}
      />
   );
   renderVoteInfo = (votingMonth, votingYear) => (
      <VoteInfo
         votingMonth={votingMonth}
         votingYear={votingYear}
         voted={false}
         nominatedEmployees={this.getNominatedEmployees()}
         addVote={this.addVote}
         expanded={this.state.expandedSections.toJS().voteInfo}
         setExpandedSections={this.setExpandedSections}
      />
   );

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


   renderCurrentNominations = () => {
      console.log(3)
      const expanded = this.state.expandedSections.toJS().currentNominations;
      const {votingYear, votingMonth, setNominationAdded} = this.props;
      return (
         <CurrentNominations
            votingMonth={votingMonth}
            votingYear={votingYear}
            voted={false}
            nominatedEmployees={this.getNominatedEmployees()}
            addNomination={this.addNomination}
            resetNominatedPersonId={this.resetNominatedPersonId}
            setNominationAdded={setNominationAdded}
            expanded={expanded}
            setExpandedSections={this.setExpandedSections}
         />
      );
   };

   render() {
      const {nominatedPersonId, votingMonth, votingYear} = this.props;
      const {voteAdded, isModal} = this.state;
      return (
         <div className="home">
            <input type='text' {...this.props.nameHOC} />
            <Element name="voteInfo">
               {voteAdded ? this.renderVotingCallMessage(votingMonth) : this.renderVoteInfo(votingMonth, votingYear)}
            </Element>
            <div id="current-nominations-wrapper">
               <Element name="currentNominations">
                  {this.renderCurrentNominations()}
               </Element>
            </div>
            <Element name="employeesSearch">
               {nominatedPersonId ?
                  this.renderNominateUser() :
                  this.renderEmployeesSearch()
               }
            </Element>
            <TransitionGroup>
               {isModal && this.renderModal(this.state.modalMessage)}
            </TransitionGroup>
         </div>
      );
   }
}

const mapDispatchToProps = dispatch => ({
   setNominatedPersonId: bindActionCreators(
      setNominatedPersonId,
      dispatch,
   ),
   setNominationAdded: bindActionCreators(
      setNominationAdded,
      dispatch,
   ),
   addNomination: bindActionCreators(
      addNomination,
      dispatch,
   )
});

const mapStateToProps = state => ({
   employees: getEmployees(state),
   nominatedPersonId: getNominatedPersonId(state),
   nominationAdded: getNominationAdded(state),
   votingMonth: getVotingMonth(state),
   votingYear: getEmployeesReducer(state).get('votingYear'),
});

export default HOC(connect(mapStateToProps, mapDispatchToProps)(Home));

