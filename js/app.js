/*console.log("test");
console.warn("test");
console.error("test");
console.log("labas");
**/

"use strict"
/*
let Firstname = "Jonas"; // string
let email = "Jonas@gmail.com"; //string
let age = 45;
let interests = ["fishing", "Drifting", "Cooking"]; //array
const TAX_RATE = 1.21; //constanta

let dog = { //object
    "id": "1",
    "breed":"koli",
    "name": "Bobikas"
}

console.log("vardas: " + Firstname);
console.log("Gmailas: "+ email);
console.log("Pomegiu skaicius: " + interests.length);

/*
console.log("Patinkamos veiklos")
for(let i=0; i<interest.lengths; i++){
    console.log(interest[i])
}
**/
/*
for(let interest of interests){
    console.log(interest);
}
**/

/*
for(let interest in interests){
    console.log(interests[interest]);
}

console.log("Sou:");
**/
/*
console.log(dog.name);
console.log(dog.breed);
console.log(dog.id);
**/
/*
for(let value in dog){
    console.log(value + ": " + dog[value]);
}

for(let value in dog){
    console.log(`Atributas: ${value}. Reiksme: ${dog[value]}`);
}

console.log(`Vartotojas: ${Firstname}. Amzius: ${age*2}`)

**/

/*
let sum = 0;
function showsum(numberOne, numberTwo){
    sum = numberOne + numberTwo;
    console.log(sum);
}

showsum(12,14)

let user = "online";
let age = 18;

let isOnline = user == "online";
console.log(`Ar vartotojas prisijunges? ${isOnline}`)


let HasAccess = (age >= 18) ? "Has access" : "No access"; //ternary operator

let price = 12.56;
let firstname = "Andrius";

let items =["phone", "tablet", "notebook"];

console.log(HasAccess)
console.log(`Duomenu tipas: ${typeof(age)}`);
console.log(`Duomenu tipas: ${typeof(price)}`);
console.log(`Duomenu tipas: ${typeof(firstname)}`);
console.log(`Duomenu tipas: ${typeof(items)}`);

console.log(firstname.length);

let text = "123 puslapiai";

console.log(`Duomenu tipas: ${typeof(text)}`);
//text = Number(text);
text = parseInt(text);
console.log(text);
console.log(`Duomenu tipas: ${typeof(text)}`);

let title = "Matrix";
let subtitle = "Best movie";

if(title){
    console.log(title);
}else{
    console.log("Title is not set");
}

if(subtitle){
    console.log(subtitle);
}else{
    console.log("subtitle not set");
}

**/
/*
let count = 2;

console.log(count++);
console.log(count);
**/
/*
let item = "tablet";
let price = 800.56;
let count = 5;
price *= 2;

console.log(price);
**/
/*
let firstNumber = "2";
let secondNumber = 2;

if(!firstNumber == !secondNumber){
    console.log("Sutampa");
}else{
    console.log("Nesutampa");
}
**/

let students = ["Ieva", "Justina", "Ana", "Gabija"];
for(let i=0;i<students.length;i++){
    if(students[i] == "Ana"){
        console.log(students[i]);
        break;
    }
    console.log(i);
}
