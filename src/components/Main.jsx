import React from 'react';
import Flights from './Flights.jsx';

import { GiAirplaneArrival, GiAirplaneDeparture } from 'react-icons/gi';
import { BrowserRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Search from './Search.jsx';

const Main = () => (
  <div className="search-flight">
    <BrowserRouter>
      <Route path="/:flightType">
        <Search />
      </Route>
      <div className="nav">
        <NavLink
          to="/departures"
          href="/departures"
          className="nav-link"
          activeClassName="button-active"
        >
          <span className="icon">
            <GiAirplaneDeparture />
          </span>
          Departures
        </NavLink>

        <NavLink
          to="/arrivals"
          href="/arrivals"
          className="nav-link"
          activeClassName="button-active"
        >
          <span className="icon">
            <GiAirplaneArrival />
          </span>
          Arrivals
        </NavLink>
      </div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/departures" />
        </Route>

        <Route path="/:flightType">
          <Flights />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default Main;
