const parsedNumber = (value, defaulValue) => {
  if (typeof value !== 'string') {
    return defaulValue;
  }
  const parsedValue = parseInt(value);
  if (Number.isNaN(parsedValue)) {
    return defaulValue;
  }
  return parsedValue;
};

export const parsePaginationParams = ({ page, perPage }) => {
  const parsedPage = parsedNumber(page, 1);
  const parsedPerPage = parsedNumber(perPage, 10);
  return {
    page: parsedPage,
    perPage: parsedPerPage,
  };
};