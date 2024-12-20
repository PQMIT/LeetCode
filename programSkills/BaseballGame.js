var calPoints = function(operations) {
    let arr = [];
    let sum = 0;
    operations.forEach(e => {
      if(parseInt(e)){
        arr.push(parseInt(e));
      }else if (e === "C") {
        arr.pop();
      }else if (e === "D"){
        let temp = arr[arr.length - 1] * 2;
        arr.push(temp);
      }
      else{
        let temp = arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(temp);
      }
    });
    for (let index = 0; index < arr.length; index++) {
      sum += arr[index];
    }
    return sum;
};
let operations = ["1","C"];
console.log(calPoints(operations));
