var addTwoPromises = async function(promise1, promise2) {
    // Sử dụng await để đợi cả hai promise hoàn thành và cộng kết quả lại
    let values = await Promise.all([promise1, promise2]);
    let result = values[0] + values[1];
    return result; // Trả về kết quả tổng
};
addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log);