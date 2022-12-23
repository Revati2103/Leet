/**
 * Return a flattened array
 *
 * @param {array} arr [1, [2, [3, [4, 5]]]]
 * @returns {array} ex: [1,2,3,4,5]
 */
const flattenArray = (arr) => {
    // add your code here
    const flat = []
  
    arr.forEach(item => {
      if(Array.isArray(item)){
        flat.push(...flattenArray(item));
      }else{
        flat.push(item);
      }
    })
    return flat;
  };
  