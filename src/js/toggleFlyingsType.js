const toggleFlyingsType = (flightsList, flightType) => {
  let newFlightsType = flightsList.departure;

  switch (flightType) {
    case 'arrivals':
      newFlightsType = flightsList.arrival;
      break;

    default:
      break;
  }

  return newFlightsType;
};

export default toggleFlyingsType;
