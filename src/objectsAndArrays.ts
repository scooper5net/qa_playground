var myFriends = {
 firstName: "Danielle",
 lastName: "Cooper",
 age: 30,
};

console.log(myFriends.firstName);
myFriends.firstName = "DJ";
console.log(myFriends.firstName);

console.log(`Person:\n\t Name: "${myFriends.firstName} ${myFriends.lastName}" \n\t Age: ${myFriends.age} \n\n`);

var favoritePizzaToppings = ["mushrooms", "onions", "italian sausage", "cheese"];

favoritePizzaToppings.forEach((thing, i) => {
    console.log(`${i + 1}. ${thing}`)
});