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

/*
let students = ["Ieva", "Justina", "Ana", "Gabija"];
for(let i=0;i<students.length;i++){
    if(students[i] == "Ana"){
        console.log(students[i]);
        break;
    }
    console.log(i);
}


function sleepIn(weekday, vacation){
    if(!weekday || vacation){
        return true;
    }
}

console.log(sleepIn(false, false));
console.log(sleepIn(true,false));
console.log(sleepIn(false,true));
**/
/*
setTimeout(function (){
    console.log("Praejo 1 s");
}, 10000);

setTimeout(function (){
    alert("Reklama");
}, 10000);
**/

/* 
const countAverage = (grades)=>{
    console.log("Pazymiai: ")
    console.log(grades)
}

countAverage([10,7,8,9,8,7])
**/
/*
const countAverage = (...grades)=>{
    // sudeti pazymius
    //padalinti is pazymiu skaiciaus
    let sum = 0;
    
    for(let grade of grades){
    sum += grade}
   /*
    grades.forEach((grade)=> sum += grade)

    return grades/grades.length;
    **/
   /*
   return sum/grades.length

}

console.log(countAverage(10,7,8,9,8,7,5,6))
**/

/*
const findNumber = (target, ...number) =>
    {
        console.log(number)
        for(let i = 0; i < number.length; ++i)
            {
                if(target === number[i])
                    {
                        return number.indexOf(target)
                    }
                else
                    {
                        return -1
                    }
            }
    }
    console.log(findNumber(27, 12, 5, 27, 9))
**/
/*
const words = ["Java", "javascript", "Python", "JSON", "HTML"];
const countWordsStartingWith = (letter, ...words) => {
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i][0] == letter || words[i][0] == letter.toUpperCase()) {
            count++;
        }
    }

    return count;
}

console.log(("J raidziu"), countWordsStartingWith("j", ...words));

const countEvenNumbers = (...numbers) =>{
    let sum = 0;
    for (let i=0; i< numbers.length; i++){
        if(numbers[i] % 2 === 0)
        {
            sum ++
        }
    }
    return sum
}

console.log(countEvenNumbers(3,8,12,5,7,20))
**/
/*
const getRandom = (max)=>{
    return Math.floor(Math.random() * max)
    //floor - islieka tik pries kableli skaicius
    // max - maximali reiksme
    //apvalinimas - round - floor - ceil -
}


console.log(getRandom(100))

// getRandom(skaicius) - skaicius max reiksme
**/
/*
const getDate = ()=>{
    const date = new Date(); // date objektas

    return date.getTime()
}

console.log(getDate())
**/
/*
const getDate = ()=>{
    const date = new Date(); // date objektas
    
    return new Date(date) // normali data
}

console.log(getDate())
**/
const getDate = ()=>{
    const date = new Date(); // date objektas
    const newDate = new Date(date).setFullYear(2027)

    return new Date(newDate).getUTCFullYear()
}

console.log(getDate())

const checkName = (name, names)=>{
    if(names.includes(name)){
        return `Surasta: ${name}`;
    }else{
        return "Not found"
    }
}

console.log(checkName("Justina", ["Monika", "Ieva", "Kristina", "Justina"]));


const toArrayConverter = (text) =>{
    return text.split(":");
}

const toStringConverter = (array)=>{
    return array.join(",")
}

console.log(toArrayConverter("Labas:rytas:suraitytas"))

console.log(toStringConverter(["Andrius", "Ieva", "Monika"]))


/*
const words = ["JavaScript", "Python", "Java", "TypeScript"];
const countWordsContaining = (searchText, ...words) =>{
    let count = 0;
    for (let word of words) {
        if (word.toLowerCase().includes(searchText.toLowerCase())) {
            count++;
        }
    }
    return count;
}

console.log(("Script zodziu"), countWordsContaining("Script", ...words));
**/


const files = ["logo.PNG", "notes.txt", "photo.jpg", "image.svg"];
const findImageFiles = (...fileNames)=>{
    let count = 0;
    if(fileNames.endsWith(".png") || fileNames.endWith(".jpg")){
        count++
    }
    return count
}

console.log(findImageFiles(...files));