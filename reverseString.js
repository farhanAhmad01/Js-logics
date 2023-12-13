const input = document.getElementById("input");
const string = input.value.split("");
let length = string.length;
console.log("get", length);
let arr = [];
for (let i = length; i >= 1; i--) {
  arr.push(string[i]);
}

console.log(arr);
