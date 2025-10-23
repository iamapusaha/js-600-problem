//page no 90
//Practice problem no 01
const bill = 3500;
let cashback = 0;
cashback = bill > 3000 ? cashback + 500 : (cashback = 0);
console.log(cashback);

//02
const myAge = 16;
myAge > 15 ? console.log("teenger") : console.log("Child");

//03
const isLoggedIn = false;
isLoggedIn
  ? console.log("message: Welcome back")
  : console.log("message: please login ");

//04
const tankFull = true;
tankFull ? console.log("Ready for a long drive") : console.log("Fill the tank");

//05
const examPass = false;
examPass
  ? console.log("party time")
  : console.log("Next semester e serious study korbo");

//06
const sunny = false;
sunny ? console.log("go outside") : console.log("stay home");

//07
const expensive = false;

expensive
  ? console.log("i can't buy this")
  : console.log("I will buy this item");
