// getStringsWithVowels(['apple', 'banana', 'orange', 'pear']); // Output: ['apple', 'orange']
// getStringsWithVowels(['Elephant', 'Zebra', 'Ostrich', 'Umbrella']); // Output: ['Elephant', 'Umbrella']
// getStringsWithVowels(['cat', 'dog', 'elephant', 'pig']); // Output: ['elephant']
// getStringsWithVowels([]); // Output: []


export const getStringsWithVowels = (array) => {
	// Write your code here
	let arr_vowels = 'aeiouAEIOU'.split('');
	let result = [];
array.forEach((element) => {
	if(arr_vowels.includes(element.split('')[0])){
		result.push(element);
	}
})
return result;
}
