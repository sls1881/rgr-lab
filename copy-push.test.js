const copyAndPush = require('./copy-push.js');
// describe('', () => {
//     it('', () => {

//     });
// });

const numbers = [1, 2, 3];

describe('copy and push function', () => {
  it('copies an array and pushes a new object to it', () => {
    const newArr = copyAndPush(numbers, 4);
    const finalArr = [1, 2, 3, 4];

    expect(newArr).toEqual(finalArr);
  });

  it('should return the original array unchanged', () => {    
    
    const newArr = copyAndPush(numbers, 5);
    const finalArr = [1, 2, 3, 5];
    
    expect(newArr).toEqual(finalArr);
  });
});
