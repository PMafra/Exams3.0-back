import { getRepository } from 'typeorm';
import Example from '../entities/example';

async function getExample(id: number) {
  const recommendations = await getRepository(Example).find({
    id,
  });

  return recommendations;
}

export { getExample };
