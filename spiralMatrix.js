function spiralMatrix(n){
   let matrix = []; 
 

   for(let i=0; i<n; i++){
       matrix.push([]);
   }

   let counter = 1;
   let startRow = 0;
   let startCol = 0;
   let endRow = (n-1);
   let endCol = (n-1);

   while(startCol<=endCol && startRow<=endRow){
       //Traverse first row from start col to end col

       for(let i = startCol ; i<= endCol; i++){
           matrix[startRow][i] = counter;
           counter++;
       }
       startRow++;

       //Traverse end col through all rows

       for(let i = startRow ; i<= endRow; i++){
            matrix[i][endCol] = counter;
            counter++;
       }

       endCol--;

       //Traverse last row from endcol to startcol

       for(let i = endCol ; i>=startCol ; i--){
           matrix[endRow][i] = counter;
           counter++;
       }

       endRow--;
        //Traverse first col from end row to upwards
       for(let i = endRow ; i>= startRow; i--){
           matrix[i][startCol] = counter;
           counter++;
       }
       startCol++;

   }
console.log(matrix);
   return matrix;


   

  
}

spiralMatrix(5);