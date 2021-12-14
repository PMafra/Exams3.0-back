import '../../src/setup';
import supertest from 'supertest';
import clearDatabase from '../helpers/clearDatabase';
import app from '../../src/app';
import connection from '../../src/dbconfig';

const agent = supertest(app);

beforeEach(async () => {
  await clearDatabase();
});
afterAll(() => {
  connection.end();
});

describe('GET /example', () => {
  it('should return example', async () => {
    const result = await agent
      .get('/example');
    expect(result.status).toBe(200);
  });
});
