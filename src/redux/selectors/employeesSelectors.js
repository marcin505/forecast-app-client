import { createSelector } from 'reselect';

const getEmployeesRoot = state => (state.employees);

/* Checks whether user is logged into application */

export const getEmployees = createSelector(
  getEmployeesRoot,
    root => (root.get('employees'))
);

export const getNominatedPersonId = createSelector(
  getEmployeesRoot,
    root => (root.get('nominatedPersonId')
  )
);

export const getNominationAdded = createSelector(
  getEmployeesRoot,
    root => (root.get('nominationAdded')
 )
);

export const getVotingMonth = createSelector(
  getEmployeesRoot,
    root => (root.get('votingMonth'))
);

export const getEmployeesReducer = createSelector(
  getEmployeesRoot,
    root => (root)
);
