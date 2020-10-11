/* eslint-disable */
const stats = (urlsArray) => {
  let i;
  const len = urlsArray.length;
  const out = [];
  const obj = {};

  // eslint-disable-next-line no-plusplus
  for (i = 0; i < len; i++) {
    obj[urlsArray[i].href] = 0;
  }
  for (i in obj) { out.push(i); }
  return { Unique: out.length, Total: len };
};

const validateStats = (urlsArray) => {
  let i;
  const len = urlsArray.length;
  const out = [];
  const obj = {};
  let broken = 0;
  let ok = 0;

  // eslint-disable-next-line no-plusplus
  for (i = 0; i < len; i++) {
    obj[urlsArray[i].href] = 0;
    if (urlsArray[i].status === 404) { broken += 1; }
    if (urlsArray[i].Check === 'OK') { ok += 1; }
  }
  for (i in obj) { out.push(i); }
  return {
    Unique: out.length, Total: len, Broken: broken, Ok: ok,
  };
};

module.exports = { stats, validateStats };
