const copyAndPush = (arr, item) => {
  const result = arr;
  arr.push(item);
  return result;
};

module.exports = copyAndPush;
