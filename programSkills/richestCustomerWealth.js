var maximumWealth = function(accounts) {
    let result = 0;
      accounts.forEach((e) => { 
        let total = 0;
        e.forEach((m)=>{
          total += m;
        })
        if (total >= result) {
          result = total;
        }
      })
    return result;
};

let accounts = [[1,2,3],[3,2,1]];
console.log(maximumWealth(accounts));
