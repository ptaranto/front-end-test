import { setTodaysQueue, setFilter } from './actions';
import reducer, { initialState } from './reducer';

describe(`the reducer module`, () => {
  it(`should have the following initialState`, () => {
    expect(initialState).toHaveProperty('customers');
    expect(initialState.customers).toHaveProperty('size', 0);
  });

  it(`should return the initialState on the default case`, () => {
    // Given
    const action = {
      type: 'TEST'
    };

    // When
    const result = reducer(undefined, action);

    // Then
    expect(result).toEqual(initialState);
  });

  it(`should handle SET_TODAYS_QUEUE`, () => {
    // Given
    const beforeState = { customers: [], filter: '' };
    const mockedData = [
      { customer: { name: 'name1' } },
      { customer: { name: 'name2' } },
      { customer: { name: 'name3' } }
    ];
    // When
    const afterState = reducer(beforeState, setTodaysQueue(mockedData));
    // Then
    expect(afterState.customers).toEqual(mockedData);
  });

  it(`should handle SET_FILTER`, () => {
    // Given
    const beforeState = { customers: [], filter: '' };
    // When
    const afterState = reducer(beforeState, setFilter('test'));
    // Then
    expect(afterState.filter).toEqual('test');
  });
});
