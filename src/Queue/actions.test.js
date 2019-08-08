import {
  setTodaysQueue,
  setFilter,
  SET_TODAYS_QUEUE,
  SET_FILTER
} from './actions';

describe('Queue Actions tests', () => {
  it('Creator should creat a SET_TODAYS_QUEUE action', () => {
    const payload = [];
    const expectedAction = {
      type: SET_TODAYS_QUEUE,
      payload
    };
    expect(setTodaysQueue(payload)).toEqual(expectedAction);
  });

  it('Creator should creat a SET_FILTER action', () => {
    const payload = 'test';
    const expectedAction = {
      type: SET_FILTER,
      payload
    };
    expect(setFilter(payload)).toEqual(expectedAction);
  });
});
