const filteredFlightsLits = (flightsList, search) => {
  let flightsTable = flightsList;

  if (!flightsTable) {
    return [];
  }

  if (search !== null) {
    flightsTable = flightsList.filter(el =>
      el.codeShareData.map(el => el.codeShare).includes(search),
    );
  }
  return flightsTable;
};

export default filteredFlightsLits;
