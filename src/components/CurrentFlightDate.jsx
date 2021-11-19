import React from 'react';
import moment from 'moment';

const CurrentFlightDate = () => (
  <div className="flight-date">{`Today: ${moment().format('DD MMMM YYYY')}`}</div>
);
export default CurrentFlightDate;
