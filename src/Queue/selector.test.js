import { getTodaysCustomers } from './selector';

describe('Queue selector tests', () => {
  it('Todays queue is empty when no data has been loaded or there is no customer for that day', () => {
    // Given
    const state = {
      queue: {
        customers: [],
        filter: ''
      }
    };

    // When
    const result = getTodaysCustomers(state);

    // Then
    expect(result.length).toEqual(state.queue.customers.length);
  });

  it('Todays full queue is returned', () => {
    // Given
    const state = {
      queue: {
        customers: [
          {
            customer: {
              name: 'name1'
            }
          },
          {
            customer: {
              name: 'name2'
            }
          },
          {
            customer: {
              name: 'name3'
            }
          }
        ],
        filter: ''
      }
    };

    // When
    const result = getTodaysCustomers(state);

    // Then
    expect(result.length).toEqual(state.queue.customers.length);
  });

  it('Todays filtered queue returns single element', () => {
    // Given
    const state = {
      queue: {
        customers: [
          {
            customer: {
              name: 'name1'
            }
          },
          {
            customer: {
              name: 'name2'
            }
          },
          {
            customer: {
              name: 'name3'
            }
          }
        ],
        filter: '2'
      }
    };

    // When
    const result = getTodaysCustomers(state);

    // Then
    expect(result.length).toEqual(1);
    expect(result[0].customer.name).toEqual('name2');
  });

  it('Todays filtered queue returns mulitple elements', () => {
    // Given
    const state = {
      queue: {
        customers: [
          {
            customer: {
              name: 'name1'
            }
          },
          {
            customer: {
              name: 'name2'
            }
          },
          {
            customer: {
              name: 'nome3'
            }
          }
        ],
        filter: 'name'
      }
    };

    // When
    const result = getTodaysCustomers(state);

    // Then
    expect(result.length).toEqual(2);
    expect(result[0].customer.name).toEqual('name1');
    expect(result[1].customer.name).toEqual('name2');
  });
});
