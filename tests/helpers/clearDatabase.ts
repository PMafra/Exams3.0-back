import connection from '../../src/dbconfig';

const del = 'DELETE FROM';

const clearDatabase = async () => {
  await connection.query(`
    ${del} "table";
  `);
};

export default clearDatabase;
