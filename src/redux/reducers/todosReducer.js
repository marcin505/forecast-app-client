import {fromJS} from 'immutable';
import {monthsArray} from 'components/common/utils/functionUtils.js';
import {
   SET_NOMINATED_PERSON_ID,
   SET_NOMINATION_ADDED,
} from 'redux/actions/actionTypes';

export const initialState = fromJS(
   fromJS([
      {
         id: 0,
         text: 'someText',
         completed: false,
      }
   ])
);

export default function todosReducer(state = initialState, {type, payload}) {
   switch (type) {
      case SET_NOMINATED_PERSON_ID:
         return state
            .set('nominatedPersonId', payload.personId);
      case SET_NOMINATION_ADDED:
         return state
            .set('nominationAdded', payload.nominationAdded);
      default:
         return state;
   }
};
