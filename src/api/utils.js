import superagent from 'superagent';

const TIMEOUT = 60000;

export const doGet = (endpoint, query, handleResp, handleErr) => {
  superagent.get(endpoint)
  .query(query)
  .timeout(TIMEOUT)
  .then(res => {
    handleResp(res.body);
  })
  .catch(e => {
    handleErr(e);
  })
};