import React from 'react';

import FlightsTable from './FlightsTable.jsx';
import CurrentFlightDate from './CurrentFlightDate.jsx';

const Flights = () => {
  return (
    <div className="main">
      <CurrentFlightDate />
      <div className="flight">
        <FlightsTable />
      </div>
    </div>
  );
};

export default Flights;
