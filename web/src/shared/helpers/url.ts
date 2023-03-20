/**
 *
 * @param {object} obj
 * @param {string} prefix
 * @return {string}
 */
export const serialize = (params: any): string => {
  const queryString = Object.keys(params)
   .filter((key)=> params[key])
    .map((key) => key + '=' + params[key])
    .join('&');
  return queryString;
};
