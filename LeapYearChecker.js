const inputYear = document.getElementsByClassName("input-year")
const button = document.getElementsByClassName("year-button")
console.log(inputYear.value)
// function leapYearCheck(year) {
   
// }

button.addEventListener("click",()=>{
    if(inputYear.text%4==0){
        console.log(`This ${inputYear.text} is Leap year`)
    }
    else {
        console.log(`This ${inputYear.text} is not Leap year`)
    }
})

// leapYearCheck(2020)