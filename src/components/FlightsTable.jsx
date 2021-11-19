import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

import { useQueryParams } from '../js/useQueryParams';
import { flightsListSelector } from '../js/flights/flights.selectors.js';
import { getFlightsList } from '../js/flights/flights.actions.js';
import FlightsTableHead from './FlightsTableHead.jsx';
import FlightsTableBody from './FlightsTableBody.jsx';
import toggleFlyingsType from '../js/toggleFlyingsType.js';
import filteredFlightsLits from '../js/filteredFlightsLits';
import NothingFound from './NothingFound.jsx';

const FlightsTable = ({ flights, getFlightsList }) => {
  const [flightsList, setFlightsList] = useState([]);
  const { flightType } = useParams();

  const search = useQueryParams(useLocation(), 'search');
  const flightsListToRender = filteredFlightsLits(flightsList, search);

  useEffect(() => {
    setFlightsList(toggleFlyingsType(flights, flightType));
  }, [flights, flightType]);

  useEffect(() => {
    setFlightsList(toggleFlyingsType(flights, flightType));
  }, [flights, flightType]);

  useEffect(() => {
    getFlightsList();
  }, []);

  if (!flightsListToRender || flightsListToRender.length <= 0) {
    return <NothingFound />;
  }

  return (
    <table className="flight-table">
      <FlightsTableHead />
      {flightsListToRender.map(flight => (
        <FlightsTableBody key={flight.ID} {...flight} />
      ))}
    </table>
  );
};

const mapDispatch = {
  getFlightsList: getFlightsList,
};

const mapState = state => {
  return {
    flights: flightsListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(FlightsTable);
