var isRobotBounded = function(instructions) {
  let listStatus = ['W', 'A', 'S', 'D'];
  let status = 'W';
  let Go = define(status);
  let result = [0, 0];
  let ketqua = false;
  //instructions = "GGLLGG"
  count = 0;
  // console.log(ins);
  let ins =  instructions.split("");
  
  while (count < 100 && !ketqua) {
    for (let i = 0; i < ins.length; i++ ) {
      if (ins[i] === 'G') {
        result[0] += define(status)[0];
        result[1] += define(status)[1];
        // console.log(i, "====================>", result);
      } else {
        // console.log("ins[i]", ins[i]);
        switchStatus(status, ins[i]);
        // console.log(switchStatus(status, ins[i]));
        status = switchStatus(status, ins[i]);
        
        // console.log(i, "====================>","result", result);
      }
    }
    console.log(result);
    
    if (result[0] == 0 && result[1] == 0) {
      ketqua = true;
      console.log("lewlew");
      
    }
    count++;
  }
  return ketqua;
};

var define = (el) => {
  let result;
  switch ((el)) {
    case 'W': result = [0, 1];
      break;
    case 'A': result = [-1, 0];
      break;
    case 'S': result = [0, -1];
      break;
    case 'D': result = [1, 0];
      break;
    default:
      break;
  }
  return result;
}

var switchStatus = (statusNow , directionNow) => {
  // statusNow = W A S D; direction = L or R
  if (directionNow === 'L') {
    switch (statusNow) {
      case 'W': statusNow = 'A';
        break;
      case 'A': statusNow = 'S';
        break;
      case 'S': statusNow = 'D';
        break;
      case 'D': statusNow = 'W';
        break;
      default:
        break;
    }
  } else {
    // directionNow === "R"
    switch (statusNow) {
      case 'W': statusNow = 'D';
        break;
      case 'D': statusNow = 'S';
        break;
      case 'S': statusNow = 'A';
        break;
      case 'A': statusNow = 'W';
        break;
      default:
        break;
    }
  }

  return statusNow;
}
let instructions = 'GL';
console.log(isRobotBounded(instructions));
