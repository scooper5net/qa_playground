// In all you decisions, if a block should run, add console.log("Check i++");
// if the block should not run, console.log("This should not print");

let numberIf = 23
let stringIfElse = "Hello World!"
let stringElseIf = "Foo Bar"
let caseString = "Six hundred and sixty six."


if (numberIf == 23) {
    console.log("Check 1")
};

if (stringIfElse == "Hello World!") {
    console.log("Check 2")
}   else {
    console.log("Hello World is the lamest statement anyway\nit could have been anything else.")
};

if (stringElseIf == "Hello World!") {
    console.log("This should not print");
}   else if (stringElseIf == "Yellow Swirls!") {
    console.log("This should not print.");
}   else if (stringElseIf == "Foo Bar") {
    console.log("Check FooBar");
}

switch (caseString) {
    case "Six hundred and sixty six":
        console.log("For it is a human number, " +caseString)
    case "Six":
        console.log("I am not a number, I am a free man!")
    default: 
        console.log("What is the number?")
};


