
// function leapYearCheck(year) {
   
//     if(year%4==0){
//         console.log(` ${year} is Leap year`)
//     }
//     else {
//         console.log(` ${year} is not Leap year`)
//     }
// }


// leapYearCheck(2020)


function isLeapYear(year) {
    // Step 1
    if (year % 4 === 0) {
        // Step 2
        if (year % 100 === 0) {
            // Step 3
            if (year % 400 === 0) {
                return true; // Leap year
            } else {
                return false; // Not a leap year
            }
        } else {
            return true; // Leap year
        }
    } else {
        return false; // Not a leap year
    }
}

// Example usage:
const yearToCheck = 2024;
if (isLeapYear(yearToCheck)) {
    console.log(`${yearToCheck} is a leap year.`);
} else {
    console.log(`${yearToCheck} is not a leap year.`);
}
