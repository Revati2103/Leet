function selectionSort(arr){
    for(let i = 0; i< arr.length; i++){
        let minIndex = i;
        for(let j = i+1; j< arr.length ; j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
  
        if(i !== minIndex){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
      return arr;
  }

  selectionSort([10,1,2,34,5,])