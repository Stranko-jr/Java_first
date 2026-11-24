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
/*
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

//*
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

/*
const files = ["logo.PNG", "notes.txt", "photo.jpg", "image.svg"];
const findImageFiles = (...fileNames)=>{
    let count = 0;
    if(fileNames.endsWith(".png") || fileNames.endWith(".jpg")){
        count++
    }
    return count
}

console.log(findImageFiles(...files));

**/
/*
const arr = ["ona", "Jonas"]

arr.push("Egle")

console.log(arr)

const gl = ["Ona", "Jonas", "egle"]
*/
/*
const items = ["API", "SQL", "HTML", "CSS", "Git", "Node"];
const buildQueue = (items, limit) =>{
    const naujas = []
    for (let i = 0; i < items.length; i++) {
    if(items.length % 2 == 0){
        naujas.push(items[i])
        if(naujas.length > limit){
            naujas.shift();
        }
    }
    else{
        naujas.unshift(items[i])
    }
    if(naujas.length > limit){
        naujas.pop(items[i])
    }
}
return naujas
}
console.log(buildQueue(items, 4));
*/

/*
const incidents = [
  { id: 10, message: "API neatsako" },
  { id: 11, message: "Duomenų bazė lėta" }
];

const events = [
  { type: "urgent", incident: { id: 12, message: "Prisijungimas neveikia" } },
  { type: "new", incident: { id: 13, message: "Eilė auga" } },
  { type: "resolve" },
  { type: "discardNewest" },
  { type: "new", incident: { id: 10, message: "Pakartotinis įvykis" } }
];

function processEvents(incidents, events, limit) {
    let active = [...incidents];
    let resolved = [];
    let discarded = [];

    for (let i = 0; i < events.length; i++) {
        let event = events[i];

        if (event.type == "new") {
            active.push(event.incident);
        }

        if (event.type == "urgent") {
            active.unshift(event.incident);
        }

        if (event.type == "resolve") {
            if (active.length > 0) {
                resolved.push(active.shift());
            }
        }

        if (event.type == "discardNewest") {
            if (active.length > 0) {
                discarded.push(active.pop());
            }
        }

        if (active.length > limit) {
            discarded.push(active.shift());
        }
    }

    return { active, resolved, discarded };
}

const result = processEvents(incidents, events, 3);

console.log("Aktyvūs:", result.active);
console.log("Išspręsti:", result.resolved);
console.log("Atmesti:", result.discarded);
*/
/*
const tasks = ["Paruošti duomenis", "Sukurti API"];
const commands = [
{ action: "urgent", value: "Sutaisyti prisijungimą" },
{ action: "finish" },
{ action: "add", value: "Parašyti dokumentaciją" },
{ action: "cancelLast" }
];

function processTasks(tasks, commands, limit) {
    let atlikti = [];
    let atsaukti = [];

    for (let command of commands) {
        if (command.action === "add") {
            tasks.push(command.value);
        }

        if (command.action === "urgent") {
            tasks.unshift(command.value);
        }

        if (tasks.length > limit) {
            atsaukti.push(tasks.shift());
        }

        if (command.action === "finish") {
            if (tasks.length > 0) {
                atlikti.push(tasks.shift());
            }
        }

        if (command.action === "cancelLast") {
            if (tasks.length > 0) {
                atsaukti.push(tasks.pop());
            }
        }
    }

    return {
        like_atlikti: tasks,
        atlikti: atlikti,
        atsaukti: atsaukti
    };
}


console.log(processTasks(tasks, commands, 3));
*/

/*
const knygos = ["Dykumos planeta", "Paskutinis traukinys", "Žvaigždžių kelias", "Tylus miestas"];
const puslapiai = [320, 180, 450, 240];

const rezultatas = knygos.map((knyga, puslapis) => {
    return knyga + " - " + puslapiai[puslapis] + " psl.";
});
const atrinktos = rezultatas.filter((k, i) => puslapiai[i] > 250);

console.log(atrinktos);
*/
/*
const studentai = ["Austėja", "Matas", "Ieva", "Lukas", "Greta"];
const ivertinimai = [8, 4, 10, 5, 3];

const gaunamasis = studentai.map((studentas, ivertinimas) => {
       return studentas + ": " + ivertinimai[ivertinimas]
});

const atsakymas = gaunamasis.filter((s, i) => ivertinimai[i] >= 5);

console.log(atsakymas)


*/



/*
const studentai = ["Austėja", "Matas", "Ieva", "Lukas", "Greta"];
const programavimas = [9, 6, 10, 7, 8];
const matematika = [8, 7, 9, 6, 9];
const angluKalba = [10, 5, 9, 8, 7];



const vidurkiai = studentai.map((vardas, ivertinimas) =>{
    const vidurkis = (programavimas[ivertinimas] + matematika[ivertinimas] + angluKalba[ivertinimas]) / 3;
    return {
        vardas: vardas,
        vidurkis: Math.round(vidurkis * 10) / 10
    };
});

const viskas = vidurkiai.filter((studentas) => studentas.vidurkis >= 9);

console.log(viskas)
*/

// pirma bonus uzduotis
/*
const pavadinimai = [
  "Kopa",
  "1984-ieji",
  "Hobitas",
  "Švarus kodas",
  "Sapiens",
  "Mažasis princas",
  "Farenheito 451"
];

const zanrai = [
  "mokslinė fantastika",
  "distopija",
  "fantastika",
  "programavimas",
  "istorija",
  "fantastika",
  "distopija"
];

const puslapiai = [412, 328, 310, 464, 498, 96, 249];
const yraBibliotekoje = [true, false, true, true, true, true, true];


const rezultatas = pavadinimai.map((knyga, i) => {
    return knyga + " - " + zanrai[i] + " - " + puslapiai[i] + " psl.";
});

const atrinktos = rezultatas.filter((knyga, i) => {
    if (puslapiai[i] > 250) {
        if (yraBibliotekoje[i] === true) {
            return true;
        }
    }
    return false;
});

console.log(atrinktos);

*/
// -- antra bonus uzduotis -- 
/*
const studentai = [
  "Austėja",
  "Matas",
  "Ieva",
  "Lukas",
  "Greta",
  "Tomas",
  "Emilija"
];

const programavimas = [9, 7, 10, 6, 8, 5, 9];
const duomenuBazes = [8, 6, 9, 8, 7, 4, 10];
const tinklai = [10, 8, 9, 7, 9, 6, 8];
const lankomumas = [92, 88, 79, 100, 85, 95, 96];

const vidurkiai = studentai.map((vardas, i) => {
    const vidurkis = (programavimas[i] + duomenuBazes[i] + tinklai[i]) / 3;
    return {
        vardas: vardas,
        vidurkis: Math.round(vidurkis * 10) / 10,
        lankomumas: lankomumas[i]
    };
});

const viskas = vidurkiai.filter((studentas) => {
    if (studentas.vidurkis >= 8) {
        if (studentas.lankomumas >= 85) {
            return true;
        }
        return false;
    }
    return false;
});

console.log(viskas);
*/
// trecioji bonus uzduotis 

/*
const studentai = [
  "Austėja",
  "Matas",
  "Ieva",
  "Lukas",
  "Greta",
  "Tomas",
  "Emilija"
];

const testas1 = [9, 7, -1, 6, 8, 5, 9];
const testas2 = [8, 6, 9, 8, 7, -1, 10];
const testas3 = [10, 8, 9, 7, -1, 6, 8];
const testas4 = [9, -1, 10, 7, 8, 4, 9];

const lankomumas = [92, 88, 79, 100, 85, 65, 96];
const vidurkiai = studentai.map((vardas, i) => {
    let suma = 0;
    let kiekis = 0;
    if (testas1[i] !== -1) suma += testas1[i], kiekis++;
    if (testas2[i] !== -1) suma += testas2[i], kiekis++;
    if (testas3[i] !== -1) suma += testas3[i], kiekis++;
    if (testas4[i] !== -1) suma += testas4[i], kiekis++;
    const vidurkis = suma / kiekis;
    return {
        vardas: vardas,
        vidurkis: Math.round(vidurkis * 10) / 10,
        galiojanciuPazymiu: kiekis,
        lankomumas: lankomumas[i]
    };
});
const galutinis = vidurkiai.filter(s => {
    return s.galiojanciuPazymiu >= 3 &&
        s.lankomumas >= 80 &&
        s.vidurkis >= 6;
});

const pagalba = vidurkiai.filter(s => {
    return s.vidurkis < 6 || s.lankomumas < 70;
});

console.log("Vidurkiai:", vidurkiai);
console.log("Galutinis sąrašas:", galutinis);
console.log("Pagalbos sąrašas:", pagalba);
*/

const student = {
    id: 1,
    vardas: "jonas",
    pavarde: "jonaitis",
    email: "jonas@gmail.com",
    pomegiai: ['games', 'fishing']
}

//console.log(`studento vardas: ${student.vardas}`)

for (let key in student){
    if(key == "pomegiai"){
        for(let hobby of student[key]){
            console.log(`${hobby}`)
        }   
    }
    else{
        console.log(`${key}: ${student[key]}`)
    }
}

const books = [
    {
        id: 1,
        isbn: "IS-1234",
        title: "Matrix",
        pageCount: 236
    },
{
    id: 2,
    isbn: "IS-5555",
    title: "apie kazka",
    pageCount: 110
},
{
    id: 3,
    isbn: "IS-1734",
    title: "Matrica",
    pageCount: 336
},
] 
/*
console.log("Knygu sarasas: ")

for(let book of books){
    for(let key in book){
        console.log(`${key}: ${book[key]}`)
    }
    console.log("-------------------")
}
*/
const searchBook = (title, books) =>{
    for (let book of books) {
        if (book.title === title) {
            return title;
        }
        else{
         return "nerasta"
        }
    }
}

const atrinkta = books.filter((book) => book.pageCount >= 200)

console.log(atrinkta)
console.log(searchBook("Matrix", books));



