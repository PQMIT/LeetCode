var plusOne = function(digits) {
  let carry = 1; // Bắt đầu với giá trị cần cộng
  for (let i = digits.length - 1; i >= 0; i--) {
      digits[i] += carry; // Cộng giá trị nhớ
      if (digits[i] > 9) {
          digits[i] = 0; // Nếu >9, đặt thành 0 và tiếp tục nhớ
          carry = 1;
      } else {
          carry = 0; // Không còn nhớ, thoát
          break;
      }
  }
  if (carry) {
      digits.unshift(1); // Nếu còn nhớ, thêm 1 vào đầu mảng
  }
  return digits;
};
plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]);