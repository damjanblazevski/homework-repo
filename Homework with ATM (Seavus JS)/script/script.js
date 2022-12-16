function ATM(request) {

    const balance = 1000;
  
    if (request > balance) {
      return "Not enough money";
    }
  
    return `You have withdrawn ${request} and your balance is ${balance - request}`;
  }
  
  console.log(ATM(200));
  console.log(ATM(1500));
  