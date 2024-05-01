let currentAge = window.prompt("Enter your current age: " );
    console.log("Your Age is " + currentAge)


let retirementAge = window.prompt("Enter your desired retirement age: " );
    console.log("Your desire of retiremenet age is " + retirementAge);

let leftYears = retirementAge - currentAge ;
    console.log("You have " + leftYears + " years left to be retired.")

let currentTime = new Date();

let currentYear = currentTime.getFullYear();

let retirementYear = currentYear + leftYears;

console.log("It's " +currentYear+", so you will be retire in " + retirementYear)



