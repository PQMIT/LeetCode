var spiralOrder = function(matrix) {
    let i = 0, j = 0;
    let x = 0, y = 0;
    let result = [];
    process(i, j, x, y, matrix, result);
    
    return result;
};

let process = function (i, j, x, y, matrix, result) {
  for( let m=0 ; m < 10; m ++ ){
    if (m === 1) {
      i= i + 1; j = j + 1;
    }else if ( m === 3){
      i--; j--;
    }else if (m === 4){
      i = i-2; j = j-2;
    }
    console.log(i, j, m, matrix[j][i]);
    //chiều tăng x
    for(i ; i < matrix[0].length - m ; i++){
      result.push(matrix[j][i]);
      if (result.length === matrix.length*matrix[0].length) {
        return result;
      }
    };
    console.log(result);
    
    i = i - 1 - m;j++;
    // console.log(i, j);
    i = i + m;
    //chiều tăng y
    for(j ; j < matrix.length -m; j++){
      result.push(matrix[j][i]);
      if (result.length === matrix.length*matrix[0].length) {
        return result;
      }
    };
    console.log(result);
    j = j - 1 - m;i--;
    j = j + m;
    //chiều giảm x
    for(i ; i >= x + m ; i--){
      result.push(matrix[j][i]);
      if (result.length === matrix.length*matrix[0].length) {
        return result;
      }
    };
    i = i + 1 + m;j--;
    i = i - m;
    console.log(result);
    //chiều giảm y
    for(j; j > y + m; j--){
      // console.log(i, j, m, matrix[j][i]);
      result.push(matrix[j][i]);
      if (result.length === matrix.length * matrix[0].length) {
        return result;
      }
    };
    // j+=2;i++;
    // console.log(m);
    console.log(result);
    
    j= j + m;i = i + m;
    console.log(i,j);
    
  }
}

// let matrix = [[1,2,3],[4,5,6],[7,8,9]];
// let matrix  = [[1,2,3,4],
//               [5,6,7,8],
//               [9,10,11,12]];
// let matrix  = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20],[21,22,23,24]];
// let matrix  = [[1,2,3,4,5],
//               [6,7,8,9,10],
//               [11,12,13,14,15],
//               [16,17,18,19,20],
//               [21,22,23,24,25]];
// let matrix  = [[23,18,20,26,25],
//               [24,22,3,4,4],
//               [15,22,2,24,29],
//               [18,15,23,28,28]];
// let matrix  = [[1,2,3,4,5,6,7,8,9,10],
//               [11,12,13,14,15,16,17,18,19,20],
//               [21,22,23,24,25,26,27,28,29,30],
//               [31,32,33,34,35,36,37,38,39,40],
//               [41,42,43,44,45,46,47,48,49,50],
//               [51,52,53,54,55,56,57,58,59,60],
//               [61,62,63,64,65,66,67,68,69,70],
//               [71,72,73,74,75,76,77,78,79,80],
//               [81,82,83,84,85,86,87,88,89,90],
//               [91,92,93,94,95,96,97,98,99,100]];
let matrix = [[1,2,3,4,5,6,7,8,9,10],
              [11,12,13,14,15,16,17,18,19,20],
              [21,22,23,24,25,26,27,28,29,30],
              [31,32,33,34,35,36,37,38,39,40],
              [41,42,43,44,45,46,47,48,49,50],
              [51,52,53,54,55,56,57,58,59,60],
              [61,62,63,64,65,66,67,68,69,70],
              [71,72,73,74,75,76,77,78,79,80],
              [81,82,83,84,85,86,87,88,89,90],
              [91,92,93,94,95,96,97,98,99,100]];
console.log(spiralOrder(matrix));