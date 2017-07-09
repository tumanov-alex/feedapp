export default (function () {
  let count = 0;

  return function () { // eslint-disable-line
    return count++;
  };
})();
