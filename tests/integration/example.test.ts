import '../../src/setup';
import supertest from 'supertest';
import { getConnection } from 'typeorm';
import clearDatabase from '../utils/clearDatabase';
import app, { init } from '../../src/app';
import { createUser } from '../factories/userFactory';

const agent = supertest(app);

beforeAll(async () => {
  await init();
});
beforeEach(async () => {
  await clearDatabase();
});
afterAll(async () => {
  await getConnection().close();
});

describe('GET /users', () => {
  it('should answer with text "OK!" and status 200', async () => {
    const user = await createUser();

    const response = await agent.get('/users');

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: user.name,
        }),
      ]),
    );

    expect(response.status).toBe(200);
  });
});
