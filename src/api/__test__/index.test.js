import { getHouses } from '..';

describe('test get houses api', () => {
  it('test get first 5 houses succeed', (done) => {
    const query = { page: 1, pageSize: 5 };
    const handleResp = (resp) => {
      expect(resp.length).toEqual(5);
      done();
    }
    const handleErr = (e) => {
      expect(true).toBeFalsy();
      done()
    };
    getHouses(query, handleResp, handleErr);
  });

  it ('test get first 5 diedout houses', (done) => {
    const query = { page: 1, pageSize: 5, hasDiedOut: true };
    const handleResp = (resp) => {
      expect(resp.length).toEqual(5);
      expect(resp.every(house => house.diedOut !== '')).toBeTruthy();
      done();
    }
    const handleErr = (e) => {
      expect(true).toBeFalsy();
      done()
    };
    getHouses(query, handleResp, handleErr);
  });

  it ('test get first 5 no-diedout houses', (done) => {
    const query = { page: 1, pageSize: 5, hasDiedOut: false };
    const handleResp = (resp) => {
      expect(resp.length).toEqual(5);
      expect(resp.every(house => house.diedOut === '')).toBeTruthy();
      done();
    }
    const handleErr = (e) => {
      expect(true).toBeFalsy();
      done()
    };
    getHouses(query, handleResp, handleErr);
  });
});