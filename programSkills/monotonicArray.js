var isMonotonic = function(nums) {
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      isDecreasing = false;
    } else if (nums[i] < nums[i - 1]) {
      isIncreasing = false;
    }
    if (!isIncreasing && !isDecreasing) {
      return false;
    }
  }
  return true;
};
let nums = [2,2,2,1,4,5];
console.log(isMonotonic(nums));
