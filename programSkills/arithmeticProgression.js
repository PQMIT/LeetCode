var canMakeArithmeticProgression = function(arr) {
  let sortedValues = arr.sort((a, b) => a - b)
  console.log(sortedValues);
  
  let space = arr[1] - arr[0];
  for(let i = 0; i < arr.length; i++ ){
    if (arr[i+1]-arr[i] !== space && arr[i+1] <= arr[arr.length-1]) {
      return false;
    }
  }
  return true;
};
let arr = [3, 5 , 1, 9];
console.log(canMakeArithmeticProgression(arr));
