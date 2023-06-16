Write a function that checks if two arrays contain the same elements (in any order)

function checkSimilar(arr1,arr2){

    return ( arr1.length === arr2.length && arr1.every((e) => arr2.includes(e)));
}

