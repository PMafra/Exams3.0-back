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

describe('/exams route integration tests', () => {
  it('should answer with exams filtered by queries', async () => {
    const response = await agent.get('/exams?school=Federal Fluminense University&category=E1&subject=Medicine');

    response.body.forEach((object: any) => {
      expect(object).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          title: expect.any(String),
          link: expect.any(String),
        }),
      );
    });
    expect(response.status).toBe(200);
  });

  it('should add a new exam', async () => {
    const mockNewExam = {
      newExamTitle: '2021.2 - Human anatomy',
      newExamUrl: 'https://enarm.com.mx/catalogo/24.pdf',
      chosenCategory: 'E1',
      chosenProfessor: 'Louise Leichtman',
      chosenSubject: 'Medicine',
      chosenSchool: 'Federal Fluminense University',
    };
    const response = await agent.post('/exams')
      .send(mockNewExam);

    expect(response.status).toBe(201);
  });
});
