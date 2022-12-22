console.log("It works!");

function sumMaxMin(numbers) {
    if (numbers.length === 0) {
    }
  
    let max = numbers[0];
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
      if (numbers[i] < min) {
        min = numbers[i];
      }
    }
  
    return {
      max: max,
      min: min,
      sum: max + min
    };
  }
  let numbers = [5, 10, 200, 3, 1];
  console.log(sumMaxMin(numbers));