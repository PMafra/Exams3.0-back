/* eslint-disable @typescript-eslint/no-explicit-any */
import '../../src/setup';
import supertest from 'supertest';
import { getConnection } from 'typeorm';
// import clearDatabase from '../utils/clearDatabase';
import app, { init } from '../../src/app';
// import { createUser } from '../factories/userFactory';

const agent = supertest(app);

beforeAll(async () => {
  await init();
});
// beforeEach(async () => {
//   await clearDatabase();
// });
afterAll(async () => {
  await getConnection().close();
});

describe('/filters route tests', () => {
  it('should answer with all categories', async () => {
    const result = await agent.get('/filters/categories');
    const mockCategoriesList = ['E1', 'E2', 'E3', '2call', 'Others'];

    expect(result.body).toHaveLength(5);
    result.body.forEach((object: any, i: number) => {
      expect(object).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          category: expect.any(String),
        }),
      );
      expect(object.category).toEqual(mockCategoriesList[i]);
    });
    expect(result.status).toBe(200);
  });

  it('should answer with all schools', async () => {
    const result = await agent.get('/filters/schools');
    const mockSchoolsList = [
      'Federal Fluminense University',
      'Rio de Janeiro Federal University',
      'São Paulo Federal University',
    ];

    expect(result.body).toHaveLength(3);
    result.body.forEach((object: any, i: number) => {
      expect(object).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          school: expect.any(String),
        }),
      );
      expect(object.school).toEqual(mockSchoolsList[i]);
    });
    expect(result.status).toBe(200);
  });

  it('should answer with professors filtered by queries', async () => {
    const result = await agent.get('/filters/professors?school=Federal Fluminense University&subject=Medicine');

    result.body.forEach((object: any) => {
      expect(object).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          professor: expect.any(String),
        }),
      );
    });
    expect(result.status).toBe(200);
  });

  it('should answer with subjects filtered by queries', async () => {
    const result = await agent.get('/filters/subjects?school=Federal Fluminense University');

    result.body.forEach((object: any) => {
      expect(object).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          subject: expect.any(String),
        }),
      );
    });
    expect(result.status).toBe(200);
  });

  // it('should answer with all categories', async () => {
  //   const user = await createUser();

  //   const response = await agent.get('/users');

  //   expect(response.body).toEqual(
  //     expect.arrayContaining([
  //       expect.objectContaining({
  //         name: user.name,
  //       }),
  //     ]),
  //   );

  //   expect(response.status).toBe(200);
  // });
});
