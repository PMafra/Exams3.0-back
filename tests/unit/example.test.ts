import '../../src/setup';
// import { QueryResult } from 'pg';
import * as validationService from '../../src/services/validationService';
import RequestError from '../../src/errors/requestError';

const sut = validationService;

// const mockQueryResult: QueryResult = {
//   rows: [],
//   command: '',
//   rowCount: 0,
//   oid: 0,
//   fields: [],
// };

describe('Insert recommendation service tests', () => {
  it('Should throw RequestError for something', async () => {
    // jest.spyOn(exampleRepository, 'selectQuery').mockImplementationOnce(async () => true);

    const result = sut.validateWithJoi('example');
    await expect(result).rejects.toThrowError(RequestError);
  });
});
