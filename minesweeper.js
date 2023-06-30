// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

// Example

// For

// matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]
// the output should be

// solution(matrix) = [[1, 2, 1],
//                     [2, 1, 1],
//                     [1, 1, 1]]

function solution(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j]) {
        row.push(1); // Represents a neighboring mine
      } else {
        let count = 0;
        // Check the neighboring cells for mines
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const nx = i + dx;
            const ny = j + dy;
            if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && matrix[nx][ny]) {
              count++;
            }
          }
        }
        row.push(count);
      }
    }
    result.push(row);
  }

  return result;
}

// Test the function with the provided example
const matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false]
];
const result = solution(matrix);
console.log(result);
