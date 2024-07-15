import { SORT_ORDER } from '../constants/contacts-constants.js';

export const parseSortOrder = ({ sortBy, sortOrder }, fieldList) => {
  const parsedSortorder = Object.values(SORT_ORDER).includes(sortOrder)
    ? sortOrder
    : SORT_ORDER.ASC;
  const parsedSortBy = fieldList.includes(sortBy) ? sortBy : fieldList[0];

  return {
    sortBy: parsedSortBy,
    sortOrder: parsedSortorder,
  };
};