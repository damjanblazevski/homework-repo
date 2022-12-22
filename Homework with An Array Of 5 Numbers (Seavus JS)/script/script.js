console.log("It works!");

function sum(numArray) { 
    let add = 0;
    for (let i = 0; i < numArray.length; i++) {
      let Addindex = numArray[i];
      add += Addindex;
    } 
    return add;
  }
  
  console.log(sum([1, 2, 3, 4, 5]));