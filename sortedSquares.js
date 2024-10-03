var nums = [-4, -1, 0, 3, 10];
var sortedSquares = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    let result = [];

    while (left <= right) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            result.unshift(nums[right] * nums[right]);
            right--;
        } else {
            result.unshift(nums[left] * nums[left]);
            left++;
        }
    }

    return result;
};
console.log(sortedSquares(nums)); // [0, 1, 9, 16, 100]
