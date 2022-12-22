console.log("It works!");

function fullNames(firstNames, lastNames) {
    if (firstNames.length !== lastNames.length) {
      return [];
    }
  
    const names = [];
    for (let i = 0; i < firstNames.length; i++) {
      names.push(`${i + 1}. ${firstNames[i]} ${lastNames[i]}`);
    }
  
    return names;
  }

  let firstNames = ['Borche', 'Danilo'];
let lastNames = ['Borisovski', 'Borozan'];
console.log(fullNames(firstNames, lastNames));