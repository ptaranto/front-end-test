import { List } from 'immutable';
import { SET_TODAYS_QUEUE, SET_FILTER } from './actions';

export const initialState = {
  customers: List.of(),
  filter: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TODAYS_QUEUE:
      return { ...state, customers: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
