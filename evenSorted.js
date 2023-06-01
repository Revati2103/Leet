// Return a sorted list of all even numbers from an Array

function evenSorted(arr){

    let result = []

    arr.forEach((element) => {
        if(element % 2 === 0){
            result.push(element);
        }
    })

    return result.sort((a,b) => (a-b))
}
// evenSorted([88,4,11,7,6,44,58,12,72])
// [4, 6, 12, 44, 58, 72, 88]
