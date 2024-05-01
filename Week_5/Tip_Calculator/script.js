let totalAmount = +window.prompt("Please enter your total amount: ");
    console.log("Your total amount is " + totalAmount+" CHF")
let tipPercentage = +window.prompt("Please enter your desired tip percentage: ");
    console.log("Your desired tip percentage is " + tipPercentage + " Percentage");

let tipAmount = (totalAmount*tipPercentage)/100;

    console.log("Your tip is " +tipAmount+ " CHF");

let overallAmount = tipAmount + totalAmount ;   

    console.log("Your final payment is " +overallAmount+ " CHF" );
