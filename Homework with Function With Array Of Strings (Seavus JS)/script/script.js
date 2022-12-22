console.log("It works!");

let hwtims = ["Hello", "there", "students", "of", "SEDC", "!"];
const firstChar = array => {
  let char = '';
  for (let word of array) {
    char += word.toString().charAt(0) + '\n';
  }
  return char;
};

console.log(firstChar(hwtims));