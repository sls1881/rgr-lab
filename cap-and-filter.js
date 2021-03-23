// const capitalizeAndFilter = (arr) => {
//   let newArr = [];
//   for (let item of arr) {
//     if (item.charAt(0) !== 'f') {
//       newArr = [...newArr, item.toUpperCase()];
//     }
//   }
//   return newArr;
// };

const capitalizeAndFilter = (arr) => {
    let newArr = [];
    for (let item of arr) {
      if (item.charAt(0) !== 'f') {
        newArr = [...newArr, item.toUpperCase()];
      }
    }
    return newArr;
  };

module.exports = capitalizeAndFilter;
