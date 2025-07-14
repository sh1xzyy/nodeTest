import { sortList } from '../constants/movies-constants.js';

export const parseSortParams = ({ sortBy, sortOrder }, sortFields) => {
  const parsedSortOrder = sortList.includes(sortOrder)
    ? sortOrder
    : sortList[0];

  const parsedSortBy = sortFields.includes(sortBy) ? sortBy : sortFields[0];

  return {
    sortOrder: parsedSortOrder,
    sortBy: parsedSortBy,
  };
};
