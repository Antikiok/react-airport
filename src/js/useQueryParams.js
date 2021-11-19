export const useQueryParams = (useLocation, querry) => {
  return new URLSearchParams(useLocation.search).get(querry);
};
