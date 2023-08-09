//Sort each string in an array 

export const sortStrings = (array) => {
	// Write your code here
	let result = [];
	array.forEach((word) => {
		result.push(word.split('').sort().join(''));
	})

	return result;
}
