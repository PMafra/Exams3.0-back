import faker from 'faker';
import connection from '../../src/dbconfig';
import { IUser as IUserInterface } from '../../src/interfaces/user';

class User {
  name: string;

  group: string;

  token: string;

  constructor(name: string, group: string, token: string) {
    this.name = name;
    this.group = group;
    this.token = token;
  }
}

const generateRandomUser = () => ({
  name: faker.internet.userName(),
  group: faker.datatype.string(),
});

const insertUser = async ({
  name, token,
}: IUserInterface) => {
  await connection.query(
    'INSERT INTO "users" (name, token) VALUES ($1, $2);',
    [name, token],
  );
};

export {
  insertUser,
  User,
  generateRandomUser,
};
