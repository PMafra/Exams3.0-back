import { getRepository } from 'typeorm';

import Example from '../../src/entities/example';

export default async function clearDatabase() {
  await getRepository(Example).delete({});
}
