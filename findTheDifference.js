var s = "abcd";
var t = "bcde";
var findTheDifference = function (s, t) {
    let result = 0;

    // Tính tổng mã ASCII của các ký tự trong `s` (trừ dần)
    for (let i = 0; i < s.length; i++) {
        result -= s.charCodeAt(i);
    }

    // Tính tổng mã ASCII của các ký tự trong `t` (cộng dần)
    for (let i = 0; i < t.length; i++) {
        result += t.charCodeAt(i);
    }

    // Chuyển kết quả cuối cùng (giá trị ASCII) thành ký tự
    return String.fromCharCode(result);
};
console.log(findTheDifference(s, t));
