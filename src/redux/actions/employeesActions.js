import {
   SET_NOMINATED_PERSON_ID,
   SET_NOMINATION_ADDED,
   ADD_NOMINATION,
   RAISE_VOTES,
} from 'redux/actions/actionTypes';

export const setNominatedPersonId = ({personId}) => ({
   type: SET_NOMINATED_PERSON_ID,
   payload: {
      personId,
   },
});

export const setNominationAdded = ({nominationAdded}) => {
   console.log(15, nominationAdded);
   return ({
      type: SET_NOMINATION_ADDED,
      payload: {
         nominationAdded,
      },
   });
};

export const addNomination = ({personId, nomination}) => ({
      type: ADD_NOMINATION,
      payload: {
         personId,
         nomination,
      }
   });


export const raiseVotes = ({personId, nominationId, votesCount}) =>
   ({
      type: RAISE_VOTES,
      payload: {
         personId,
         nominationId,
         votesCount,
      }
   });


