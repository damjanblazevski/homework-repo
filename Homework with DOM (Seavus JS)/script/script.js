console.log("It works!");

const headers = document.querySelectorAll("h1, h3");
for (i = 0; i < headers.length; i++) {
    headers[i].textContent = "Changed Headers!"
}

const paragraphs = document.querySelectorAll("p");
for (i = 0; i < paragraphs.length; i++) {
    paragraphs[i].textContent = "Changed Paragraphs!";
}

let sum = 0;
let arr =  [1, 2, 3, 4, 5];
console.log(arr)
for(i = 0; i<arr.length; i++){
    sum += arr[i];
}
console.log(sum)
let print = document.getElementById("array"). innerHTML = arr;
let sumA = document.getElementById("sum"). innerHTML = sum;