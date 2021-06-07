// Form chunks of specified size from an inout array

function chunkArray(array, size){
let chunked = [];

for (const item of array) {

   const lastElement = chunked[chunked.length - 1] ;
  

   if(!lastElement || lastElement.length ===  size){
    chunked.push([item]);
   } else{
       lastElement.push(item);

   }
   
}
console.log(chunked);

}

chunkArray([1,2,3,4,5], 2);