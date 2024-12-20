/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let numZeroes = 0;
  
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
          numZeroes++;
      } 
      else {
          let temp = nums[i];
          nums[i] = nums[i - numZeroes];
          nums[i - numZeroes] = temp;
      }
  }
  
  return nums;
};

console.log(moveZeroes([0,1,2,3,4,0,0,0,5,6,7,8]));