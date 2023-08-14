export const kthDistinct = (arr, k) => {
    let charMap = new Map();
    if (!arr.length || k > arr.length) return "";

    for (let i = 0; i < arr.length; i++) {
        charMap.has(arr[i]) ? charMap.set(arr[i], charMap.get(arr[i]) + 1) : charMap.set(arr[i], 1);
    }

    for (let i = 0; i < arr.length; i++) {
        if (charMap.get(arr[i]) === 1) {
            k--;
            if (k === 0) {
                return arr[i];
            }
        }
    }

    return "";
}
