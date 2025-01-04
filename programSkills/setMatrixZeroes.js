var setZeroes = function(matrix) {
    let result = [[]];
    let rememberI = [];
    let rememberJ = [];
    // Tìm giá trị không và lưu giá trị hàng cột
    for(let j = 0; j < matrix.length; j++){
      for( let i = 0; i < matrix[0].length; i++){
        if(matrix[j][i] === 0){
          // console.log(i, j);
          if (!rememberI.includes(i)) {
            rememberI.push(i);
          }
          if (!rememberJ.includes(j)) {
            rememberJ.push(j);
          }
        }
      }
    }
    result[0].length = matrix[0].length;
    // console.log(result);
    

    // Điền giá trị 99 nếu giá trị ban đầu là 0
    for (let y = 0; y < matrix.length; y++) {
      for (let x = 0; x < matrix[y].length; x++) {
        if (rememberI.includes(x) || rememberJ.includes(y)) {
          matrix[y][x] = 0;
        }
        // console.log(`y,x=(${y},${x}) value: ${matrix[y][x]}`);
      }
    }
    // console.log(rememberI, rememberJ, matrix[0], matrix[1], matrix[2]);
    return result;
};

let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
// console.log(setZeroes(matrix));
