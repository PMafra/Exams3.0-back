/* eslint-disable @typescript-eslint/no-explicit-any */
import '../../src/setup';
import supertest from 'supertest';
import { getConnection } from 'typeorm';
import app, { init } from '../../src/app';

const agent = supertest(app);

beforeAll(async () => {
  await init();
});
afterAll(async () => {
  await getConnection().close();
});

describe('/filters route integration tests', () => {
  it('should answer with all categories', async () => {
    const response = await agent.get('/filters/categories');
    const mockCategoriesList = ['E1', 'E2', 'E3', '2call', 'Others'];

    expect(response.body).toHaveLength(5);
    response.body.forEach((object: any, i: number) => {
      expect(object).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          category: expect.any(String),
        }),
      );
      expect(object.category).toEqual(mockCategoriesList[i]);
    });
    expect(response.status).toBe(200);
  });

  it('should answer with all schools', async () => {
    const response = await agent.get('/filters/schools');
    const mockSchoolsList = [
      'Federal Fluminense University',
      'Rio de Janeiro Federal University',
      'São Paulo Federal University',
    ];

    expect(response.body).toHaveLength(3);
    response.body.forEach((object: any, i: number) => {
      expect(object).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          school: expect.any(String),
        }),
      );
      expect(object.school).toEqual(mockSchoolsList[i]);
    });
    expect(response.status).toBe(200);
  });

  it('should answer with professors filtered by queries', async () => {
    const response = await agent.get('/filters/professors?school=Federal Fluminense University&subject=Medicine');

    response.body.forEach((object: any) => {
      expect(object).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          professor: expect.any(String),
        }),
      );
    });
    expect(response.status).toBe(200);
  });

  it('should answer with subjects filtered by queries', async () => {
    const response = await agent.get('/filters/subjects?school=Federal Fluminense University');

    response.body.forEach((object: any) => {
      expect(object).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          subject: expect.any(String),
        }),
      );
    });
    expect(response.status).toBe(200);
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
