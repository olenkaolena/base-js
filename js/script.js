//1.
let age = prompt("How old are you?");
alert("I'm " + age + " years old");

//2.
const year = 2020;
let birthYear = prompt("What is the year of your birth?");
let yourAge = year - birthYear;
alert("You're " + yourAge + " years old");

//3.
let a = prompt("Give me the lenght of 'a' leg of rectangle");
let b = prompt("Give me the lenght of 'b' leg of rectangle");
let p = 2 * a + 2 * b;
alert("The P of rectangular is " + p);

//4.
const p = 3.14;
let r = prompt("What is the radius of a circle?");
let s = p * r **2;
alert("The S of the circle is " + s);

//5.
const v = 50;
let t = prompt("How long will you be driving?");
let s = v * t;
alert("S is " + s);

//6.
const a = 0.62;
let km = prompt("Give me a distance in km");
let ml = km * a;
alert("Distance in ml'll be " + ml);

let ml = prompt("Give me a distance in ml");
let km = ml / a;
alert("Distance in km'll be " + km);

//7.
let money = prompt("How much money do you have?");
let essencePrice = prompt("What is the price of 1 liter of essence?");
let essence = money / essencePrice;
let restOfMoney = money - (essencePrice * essence);
alert("You can buy " + essence + " liters of essence. The balance on your card'll be " + restOfMoney);
