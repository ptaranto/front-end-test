import base64 from 'base-64';
import store from '../state';

export const SET_TODAYS_QUEUE = 'SET_TODAYS_QUEUE';
export const SET_FILTER = 'SET_FILTER';

export const fetchTodaysQueue = () => {
  const headers = new Headers();
  headers.set(
    'Authorization',
    'Basic ' + base64.encode('codetest1:codetest100')
  );
  fetch('api/queue/gj9fs', {
    method: 'GET',
    headers
  })
    .then(response => response.json())
    .then(json => {
      store.dispatch(setTodaysQueue(json.queueData.queue.customersToday));
    })
    .catch(() => store.dispatch(setTodaysQueue([])));
};

export const setTodaysQueue = queue => {
  return {
    type: SET_TODAYS_QUEUE,
    payload: queue
  };
};

export const setFilter = value => {
  return {
    type: SET_FILTER,
    payload: value
  };
};
