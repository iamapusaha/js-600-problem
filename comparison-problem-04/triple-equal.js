//problem number 01
// output 1st is true and 2nd is false
const myMoney = 100;
const friendMoney = "100";
console.log(myMoney == friendMoney);
console.log(myMoney === friendMoney);

//02
console.log("Javascript" == "Javascript");
// here the output is true, coz here we use double equal and the equal left and right side both are same.
console.log("Javascript" === "Javascript");
// also here output are same,coz we are using here triple equal,equal left side and right side are same with value and data type also so that output is true here.

//03
console.log(25 == "25");
//output is true,coz left one 25 is number and right one "25" is tstring == is only check the value not data type.
console.log(25 === "25");
//output is false,coz here left one 25 is number and right "25" is string and === is not checking value it's check value, data type also that way it's showing output false.

//04
// both output is true
console.log("apple" == "apple");
console.log("apple" === "apple");

//05
// both out put is false
console.log("test" == "TEST");
console.log("test" === "TEST");

//06
//output is ture
const variableX = 15;
const variableY = 20;
console.log(variableX !== variableY);

//07
const variableA = hello;
const variableB = "Hello";
console.log(variableA == variableB);
console.log(variableA === variableB);
