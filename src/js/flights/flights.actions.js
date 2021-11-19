import { fetchFlightsList } from './flightsGateway.js';

export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS_LIST_RECIEVED';

export const flightsListRecieved = flightsList => ({
  type: FLIGHTS_LIST_RECIEVED,
  payload: {
    flightsList,
  },
});

export const getFlightsList = () => {
  const thunkAction = function (dispatch) {
    fetchFlightsList().then(flightsList => dispatch(flightsListRecieved(flightsList.body)));
  };
  return thunkAction;
};
