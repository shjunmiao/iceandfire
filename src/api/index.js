import { doGet } from './utils';

const BASE_URL = 'https://anapioficeandfire.com/api';
const HOUSES_ENDPOINT = '/houses';

export const getHouses = (query, handleResp, handleErr) => {
  const endpoint = `${BASE_URL}${HOUSES_ENDPOINT}`;
  doGet(endpoint, query, handleResp, handleErr);
};
