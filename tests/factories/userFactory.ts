import faker from 'faker';
import { getRepository } from 'typeorm';
import Example from '../../src/entities/example';
import { IUserDB } from '../../src/interfaces/user';

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

async function createUser(): Promise<IUserDB> {
  const user = await getRepository(Example).create({
    name: 'Pedro Mafra',
  });

  await getRepository(Example).save(user);

  return user;
}

export {
  createUser,
  User,
  generateRandomUser,
};
