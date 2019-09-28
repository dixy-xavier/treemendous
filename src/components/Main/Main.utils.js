/**
 *  This function takes url path and calls fetch service and
 *  returns a promise which will give the response object
 */

export const request = async (url) => {
  const response = await fetch(url);
  return await response.json();
};
