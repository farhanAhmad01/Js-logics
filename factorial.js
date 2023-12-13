function factorial(x) {
    let num = 1;
    for (let i = x; i >=1; i--) {
    num = num*i
  }
  return num
}
console.log(factorial(6));

// Method 2

// function factorial(x){
//     let num =1;
//     for ( let i = 1; i<=x;i++){
//         num = num*i
//     }
//     return num
// }

// console.log(factorial(6))