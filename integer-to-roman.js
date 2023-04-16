// Convert integer to roman

var intToRoman = function(num) {
    const romanMap = new Map([
      [1000, 'M'],
      [900, 'CM'],
      [500, 'D'],
      [400, 'CD'],
      [100, 'C'],
      [90, 'XC'],
      [50, 'L'],
      [40, 'XL'],
      [10, 'X'],
      [9, 'IX'],
      [5, 'V'],
      [4, 'IV'],
      [1, 'I']
    ]);
    const res = [];
  
    while (num > 0) {
      for (const [number, char] of romanMap) {
        while (num >= number) {
          num -= number;
          res.push(char);
        }
      }
    }
  console.log(res.join(''));
    return res.join('');  
  };

  let num = 49
intToRoman(num);
