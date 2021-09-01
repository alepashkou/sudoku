module.exports = function solveSudoku(matrix) {

function mainSudoku(matrix){

for (let i = 0; i < 9; i++){

    for (let j = 0; j < 9; j++){

      if (matrix[i][j] === 0){

        for (let n = 1; n <= 9; n++){

          if (calc(matrix, i, j, n)){

            matrix[i][j] = n;

            if (solveSudoku(matrix)){

             return matrix;

            } else {

              matrix[i][j] = 0;

            }

          }

        }

        return false;

      }

    }

  }

  return matrix;

}

function calc(matrix, i, j, n){

 for (let u = 0; u < 9; u++){

  let x = (3*Math.floor(i/3))+(Math.floor(u/3));

  let y = (3*Math.floor(j/3))+(u%3);

  if (matrix[i][u]===n||matrix[u][j]===n||matrix[x][y]===n){

    return false;

  }

 }

  return true;

}

return mainSudoku(matrix);

}