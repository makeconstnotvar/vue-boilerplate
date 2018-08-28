function cleanObject(params) {
  for (let key in params) {
    if (key === 'page' && params[key] > 0)
      params[key] -= 1;
    if (!params[key]) {
      delete params[key]
    }
  }
  return params;
}
export {cleanObject}
