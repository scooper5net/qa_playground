/* gets a number between 1 and 10 for the callback
@callback numberHandler is passed the number generated */ 

function getNumber(numberHandler) { 
    numberHandler(Math.ceil(Math.random() * 10)); 
}

//getNumber will generate a random number between 1 and 10, and then

let myNumber = getNumber(numberHandler);

console.log(myNumber);