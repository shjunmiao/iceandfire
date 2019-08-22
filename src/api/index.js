import { doGet } from './utils';

const BASE_URL = 'https://anapioficeandfire.com/api';
const HOUSES_ENDPOINT = '/houses';

const getHouses = (query, handleResp, handleErr, isFromShowMore) => {
  const endpoint = `${BASE_URL}${HOUSES_ENDPOINT}`;
  doGet(endpoint, query, handleResp, handleErr, isFromShowMore);
};

const get = (url, handleResp, handleErr) => {
  doGet(url, '', handleResp, handleErr);
}
export { getHouses, get };
