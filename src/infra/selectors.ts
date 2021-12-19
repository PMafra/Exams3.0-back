/* eslint-disable @typescript-eslint/no-explicit-any */
import { getRepository } from 'typeorm';

async function selector(Entity: any) {
  const result = await getRepository(Entity).find();

  return result;
}

export {
  selector,
};
