const copyAndPush = require('./copy-push.js');
// describe('', () => {
//     it('', () => {

//     });
// });

describe('copy and push function', () => {
  it('copies an array and pushes a new object to it', () => {
    const numbers = [1, 2, 3];
    const newArr = copyAndPush(numbers, 4);
    const finalArr = [1, 2, 3, 4];

    expect(newArr).toEqual(finalArr);
  });
});
