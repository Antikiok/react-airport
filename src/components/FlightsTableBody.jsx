import React from 'react';
import moment from 'moment';

const FlightsTableBody = props => {
  const { term, fltNo, timeDepFact, timeLandFact, timeDepExpectCalc } = props;
  const { logoSmallName, name } = props.airline.en;
  const destination = props['airportFromID.city_en'] || props['airportToID.city_en'];

  const localTime = !timeDepExpectCalc
    ? moment(timeLandFact).format('HH:mm')
    : moment(timeDepExpectCalc).format('HH:mm');

  const timeStatusDep = moment(timeDepFact).format('HH:mm');
  const timeStatusArr = moment(timeLandFact).format('HH:mm');
  const flightNumber = `${props['carrierID.IATA']}${fltNo}`;

  let terminalColor;

  switch (term) {
    case 'A':
      terminalColor = 'green';
      break;
    case 'B':
      terminalColor = 'purple';
      break;
    case 'C':
      terminalColor = 'aqua';
      break;
    case 'D':
      terminalColor = '#1eb7ee';
      break;
    default:
      terminalColor = 'lightcoral';
      break;
  }

  let status;
  switch (props.status) {
    case 'DP':
      status = `Departed at ${timeStatusDep}`;
      break;
    case 'LN':
      status = `Landed ${timeStatusArr}`;
      break;
    case 'FR':
      status = 'In flight';
      break;
    case 'ON':
      status = 'On time';
      break;
    case 'GC':
      status = 'Landing is complete';
      break;
    case 'DL':
      status = 'Delayed';
      break;
    case 'CK':
      status = 'Registration';
      break;
    case 'BD':
      status = 'Landing';
      break;
    default:
      status = props.status;
  }

  return (
    <tbody className="flight-table-body">
      <tr className="flight-table-body-tr">
        <td>
          <span style={{ color: terminalColor, borderColor: terminalColor }}>{term}</span>
        </td>
        <td>{localTime}</td>
        <td>{destination}</td>
        <td>{status}</td>
        <td>
          <div className="img">
            <img className="img-responsive" src={logoSmallName} alt={name} />
            <span>{name}</span>
          </div>
        </td>
        <td>{flightNumber}</td>
      </tr>
    </tbody>
  );
};

export default FlightsTableBody;
