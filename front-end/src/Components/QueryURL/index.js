

export function createQueryString(queryObject = {}) {
    let queryString = Object.keys(queryObject)
      .filter((key) => queryObject[key] && !(Array.isArray(queryObject[key]) && !queryObject[key].length))
      .map((key) => {
        return Array.isArray(queryObject[key]) ? queryObject[key].map(item => `${encodeURIComponent(key)}=${encodeURIComponent(item)}`).join('&') : `${encodeURIComponent(key)}=${encodeURIComponent(queryObject[key])}`;
      }).join('&');
    return queryString ? `?${queryString}` : "";
  };
 //turns query string back into an object
 export function queryStringToObject(queryString = "", options = {}) {
  let queryObject = {};
  queryString && decodeURIComponent(queryString.replace('?', '')).split('&').map((itemString) => {
    let [itemKey, itemValue] = itemString.split("=");
    if (options.hasOwnProperty(itemKey)) {
      if (!queryObject[itemKey] && Array.isArray(options[itemKey])) {
        queryObject[itemKey] = [];
      }
      Array.isArray(options[itemKey]) ? queryObject[itemKey].push(itemValue) : queryObject[itemKey] = typeof options[itemKey] === "number" ? parseInt(itemValue) : itemValue;}
  });
  return queryObject;
};
