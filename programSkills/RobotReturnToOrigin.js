var judgeCircle = function(moves) {
    let arr = [0, 0]; //[x, y]
    let arrMoves = moves.split('');
    console.log(arrMoves);
    
    arrMoves.forEach(e => {
      switch (e) {
        case 'R':
          arr[0]+=1;
          break;
        case 'L':
          arr[0]-=1;
          break;
        case 'U':
          arr[1]+=1;
          break;
        case 'D':
          arr[1]-=1;
          break;
      
        default:
          break;
      }
    });
    if (arr[0] == arr[1] && arr[0] ==0) {

      return true;
    }
    return false;
};
let moves = "UD";
console.log(judgeCircle(moves));
