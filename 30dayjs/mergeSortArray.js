var nums1 = [1, 2, 3, 0, 0, 0];
var m = 3;
var nums2 = [2, 5, 6];
var n = 3;

/* var merge = function (nums1, m, nums2, n) {
  var i = (j = 0);
  var result = [];
  while (result.length < m + n) {
    if (nums1[i] < nums2[j] && nums1[i] !== 0) {
      result.push(nums1[i]);
      i++;
    } else {
      result.push(nums2[j]);
      j++;
    }
  }
  return result;
}; */
function merge(nums1, m, nums2, n) {
    let i = m - 1; // Pointer for nums1
    let j = n - 1; // Pointer for nums2
    let k = m + n - 1; // Pointer for the last position of nums1

    // Traverse from the back and merge
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    console.log("nums1: " + nums1);

    // If there are remaining elements in nums2
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }

    return nums1;
}

console.log("result: " + merge(nums1, m, nums2, n)); // [1, 2, 2, 3, 5, 6]
