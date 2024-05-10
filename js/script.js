// datatypes in js
// 2 main datatypes in js which are the primitve and reference/object type

// primitive datatypes
// numbers=floating point numbers e.g 21.0
// string= like letters or characters e.g A to Z.....anythging within quote is string
// boolen= this is a true or false table/command 
// undefined= this is a value not assigned anything,....that is place on something but not used 
// null = this is almost like undefined but not really it. its nothing.
// big int = this are number that are too large that can not be stored.
// symbol = 2015 its a value that is unique and cant be change.

let num = 23;
console.log(num);
let student = "Obi";
let greeting = "what's";
let g = true;
let b;
console.log(b);


//  let
let age = 20;
console.log(age);
age = 21;
console.log(age);

//the three ways of declaring variables are.... the let, the const and the var. the first two in 2015 . var is the old version.let is used to declare  variables

// const can't be changed

const birthYear = 1900;
console.log(birthYear);


// var should be completely avoided. this over-ride any var inserted in a block because it is a functional scoop 
// var should be avoided at all time . use const or let in place of it 
var job = "Programmer";
console.log(job);
job = "teacher";
console.log(job);

{
  let age = 20;
  console.log(typeof age);
}

{
  let age = "age";
  console.log(age);
}


const numb = "23";
console.log(typeof numb);


// note = let and const...the two are block scoop

// carmel rule is that the first letter of the two words should start in small letter others in capital letter
//  you cant start variables name with number e.g const 2h = "f"; but you can use $,e.g const $ghjj or _ e.g  const last_name =

// you cant store variables with js reserved keyword word e.g const, let, new, if,
// make sure that your variables name are descrptive
// ypou should not start a variables name with capital letter e.g let MYname = "somtoo";....this is because sth in js stores things with js.

// basic operators in js 

// arithematic operators
console.log(2+4);
console.log(4-39);

const year = 2024;
const ageNigeria = year - 1960;
console.log("Nigeria age", ageNigeria);
console.log(year / 10);
console.log(year * 10);


// modulus = anytghing that remains in the division made is modulus 
console.log(7 % 4 );
console.log(10 % 4 );

// increment and decrement
let x = 10;
console.log(x++); 
console.log(x + 3); 
// ++x 

console.log(x); 
console.log(x--); 

