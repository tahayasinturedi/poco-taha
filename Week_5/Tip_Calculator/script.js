let totalAmount = +window.prompt("Please enter your total amount: ");
    console.log("Your total amount is " + totalAmount+" Frank")
let tipPercentage = +window.prompt("Please enter your desired tip percentage: ");
    console.log("Your desired tip percentage is " + tipPercentage + " Frank");

let tipAmount = (totalAmount*tipPercentage)/100;

    console.log("Your tip is " +tipAmount+ " Frank");

let overallAmount = tipAmount + totalAmount ;   

    console.log("Your final payment is " +overallAmount+ " Frank" )
