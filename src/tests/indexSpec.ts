import { filFound, dirFunc, newName } from '../utilities/filesFounder';
import { positiveNumFun } from '../middlewares/queryValidation';
import supertest from 'supertest';
import app from '../index';

const request: supertest.SuperTest<supertest.Test> = supertest(app);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ? =============================   =============================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
describe('filFound', () => {
  it('file in folder', () => {
    expect(filFound('main', 'art.jpg')).toEqual(true);
  });
  it('file not in folder', () => {
    expect(filFound('main', 'art-200-200.jpg')).toEqual(false);
  });
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ? =============================   =============================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
describe('positive number', () => {
  it('positive', () => {
    expect(positiveNumFun(200)).toEqual(true);
  });
  it('not positive', () => {
    expect(positiveNumFun(-200)).toEqual(false);
  });
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ? =============================   =============================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
describe('test dirFunc', () => {
  it('create thumb file', () => {
    expect(dirFunc()).toBeTruthy();
  });
});

describe('test newName func', () => {
  it('is func generate the new name with dimensions', () => {
    expect(newName('art', 400, 200)).toEqual('art-400-200.jpg');
  });
});
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ? =============================   =============================
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
describe('api test', () => {
  it('gets /api/images?filename=art&width=400&height=200 (valid)', async (): Promise<void> => {
    const response: supertest.Response = await request.get(
      '/api/images?filename=art&width=400&height=200'
    );
    expect(response.status).toBe(200);
  });
});
