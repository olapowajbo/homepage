console.log(`Witaj nieznajomy`);
const name = "Ola";
const age = 35;
console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age} lat.`);

const heading = document.querySelector('.main__heading--js');
console.log(heading);

const hello = document.querySelector('.hello-section--js');
console.log(hello);

function calculate (myNumber) {
    console.log(`Dostałam ${myNumber}`);
    return myNumber*7;
}
const myResult = calculate (age);
console.log(age);

console.log(myResult);


function greet(age, name) {
    console.log(`Witaj nieznajomy, nazywam się ${name} i mam ${age} lat.`);
}
greet (age, name);

let nameVisitor = "Asia";
let ageVisitor = 22;
function hello2(nameVisitor, ageVisitor) {
    console.log(`Witaj ${nameVisitor}, lat ${ageVisitor} miło mi, że tu zaglądasz`);
}
hello2 (nameVisitor, ageVisitor);
    