import moment from 'moment';

const currentDate = moment().format('DD-MM-YYYY');

const baseUrl = 'https://api.iev.aero/api/flights';

export const fetchFlightsList = () =>
  fetch(`${baseUrl}/${currentDate}`).then(res => {
    if (!res.ok) {
      throw new Error('Failed to fetch tasks list');
    }
    return res.json();
  });
