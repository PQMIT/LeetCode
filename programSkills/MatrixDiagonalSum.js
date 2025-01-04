var diagonalSum = function(mat) {
    let result = 0 ;
    mat.forEach((value, index)=>{
      console.log(value, index);
      if (index === value.length - 1 - index) {
        result = result + value[index]
      } else {
        result = result + value[index] + value[value.length - 1 - index];
      }
    })
    return result;
};
mat = [[1,2,3],[4,5,6],[7,8,9]]
console.log(diagonalSum(mat));
