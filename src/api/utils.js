import superagent from 'superagent';

const TIMEOUT = 60000;

export const doGet = (endpoint, query, handleResp, handleErr, append = false) => {
  superagent.get(endpoint)
  .query(query)
  .timeout(TIMEOUT)
  .then(res => {
    handleResp(res.body, append);
  })
  .catch(e => {
    handleErr(e);
  })
};