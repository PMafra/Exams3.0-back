import '../../src/setup';
import supertest from 'supertest';
import { getConnection } from 'typeorm';
import clearDatabase from '../helpers/clearDatabase';
import app, { init } from '../../src/app';

const agent = supertest(app);

beforeEach(async () => {
  await clearDatabase();
});
beforeAll(async () => {
  await init();
});
afterAll(async () => {
  await getConnection().close();
});

describe('GET /example', () => {
  it('should return example', async () => {
    const result = await agent
      .get('/example');
    expect(result.status).toBe(200);
  });
});
