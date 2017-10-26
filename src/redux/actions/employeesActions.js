import {
  SET_NOMINATED_PERSON_ID,
  SET_NOMINATION_ADDED,
} from 'redux/actions/actionTypes';

export const setNominatedPersonId = ({ personId }) => ({
  type: SET_NOMINATED_PERSON_ID,
  payload: {
    personId,
  },
});

export const setNominationAdded = ({ nominationAdded }) => ({
  type: SET_NOMINATION_ADDED,
  payload: {
    nominationAdded,
  },
});
