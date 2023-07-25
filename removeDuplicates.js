export const removeDuplicates = (str) => {
	if (str.length === 0) {
		return ''
	}

	let result = ''
	for (let i = 0; i < str.length; i++) {
		if (result.indexOf(str[i]) === -1) {
			result += str[i]
		}
	}

	return result
}
