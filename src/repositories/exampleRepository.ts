import connection from '../dbconfig';
import { generateSelect } from '../helpers/queryHelper';

const selectQuery = async () => {
  const baseQuery = generateSelect({ table: 'tableName' });

  const result = await connection.query(`${baseQuery};`);

  return result.rows;
};

export {
  selectQuery,
};
