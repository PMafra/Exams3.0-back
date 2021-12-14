import { IHelper } from '../interfaces/helper';

const filterHelper = (filterItems: IHelper) => {
  let finalQuery = filterItems.baseQuery;
  const preparedValue = [];

  if (filterItems.name) {
    preparedValue.push(filterItems.name);
    finalQuery += ` WHERE name ILIKE $${preparedValue.length}`;
  }
  if (filterItems.amount) {
    preparedValue.push(filterItems.amount);
    finalQuery += ` ORDER BY score DESC LIMIT $${preparedValue.length}`;
  }

  return {
    finalQuery,
    preparedValue,
  };
};

export default filterHelper;
