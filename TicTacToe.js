var tictactoe = function(moves) {
  let movesNew = [];
    for (let index = 0; index < moves.length; index++) {
      movesNew.push(define(moves[index]));
    }
    if (movesNew.length < 5) {
      return "Pending";
    }
    if (movesNew.length === 9 ) {
      // console.log(1111111111111111);
      // chỉ xem xét A có thắng hay không
      let movesA = movesNew.filter((e, i)=> i % 2 === 0);
      console.log(listWin(movesA));
      return listWin(movesA) ? 'A': "Draw";
    } else{
      if (movesNew.length % 2 === 0 ) {
      // console.log(222222222222222222);
        // chỉ xem xét A có thắng hay không
      let movesB = movesNew.filter((e, i)=> i % 2 !== 0);
      console.log(listWin(movesB));
      return listWin(movesB) ? 'B': "Pending";
      } else {
      // console.log(333333333333);
        // chỉ xem xét A có thắng hay không
      let movesA = movesNew.filter((e, i)=> i % 2 === 0);
      console.log(movesA, listWin(movesA));
      return listWin(movesA) ? 'A': "Pending";
      }
    }
};

var define = (el) => {
  let result;
  switch (JSON.stringify(el)) {
    case JSON.stringify([0, 0]): result = 1;
      break;
    case JSON.stringify([0, 1]): result = 4;
      break;
    case JSON.stringify([0, 2]): result = 7;
      break;
    case JSON.stringify([1, 0]): result = 2;
      break;
    case JSON.stringify([1, 1]): result = 5;
      break;
    case JSON.stringify([1, 2]): result = 8;
      break;
    case JSON.stringify([2, 0]): result = 3;
      break;
    case JSON.stringify([2, 1]): result = 6;
      break;
    case JSON.stringify([2, 2]): result = 9;
      break;
    default:
      break;
  }
  return result;
}

var listWin = (ls) => {
  let arr = [[1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 2 ,3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7]];
  // ls= [1, 4, 5, 7, 9] example
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    result = arr[i].every(val => ls.includes(val))
    if(result === true) break;
  }
  return result;
}

// let moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]];
let moves = [[0,0],[2,0],[1,1],[2,1],[2,2]];
console.log(tictactoe(moves));
