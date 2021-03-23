const capitalizeAndFilter = require('./cap-and-filter.js');
// describe('', () => {
//     it('', () => {

//     });
// });

const arr = ['shelby', 'cherno', 'josie', 'ffs', 'fml'];

describe('capitalize and filter function', () => {
  it('should take an array of strings, capitalize them, and then filter anything that starts with F', () => {
    
    const upperCase = capitalizeAndFilter(arr);
    
    const finalArr = ['SHELBY', 'CHERNO', 'JOSIE'];
    
    expect(upperCase).toEqual(finalArr);
  });
});
