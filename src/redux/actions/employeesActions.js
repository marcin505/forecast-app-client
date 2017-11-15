import {
  SET_NOMINATED_PERSON_ID,
  SET_NOMINATION_ADDED,
  ADD_NOMINATION,
} from 'redux/actions/actionTypes';

export const setNominatedPersonId = ({ personId }) => ({
  type: SET_NOMINATED_PERSON_ID,
  payload: {
    personId,
  },
});

export const setNominationAdded = ({ nominationAdded }) => {
  console.log(15, nominationAdded);
  return ({
      type: SET_NOMINATION_ADDED,
      payload: {
         nominationAdded,
      },
   });
};

export const addNomination = ({ personId, nomination }) =>{
    return  ({
     type: ADD_NOMINATION,
     payload: {
       personId,
       nomination,
     }
})};


