//Number
let n = 25;
console.log(typeof(n));
console.log(n);

let inf = 100/0;
console.log(inf);

console.log("Arkatama" + 1);
console.log("Multi Solusindo" + (2*5));
console.log("Nan" * 3);

//BigInt
const BigInt = 123456789012345678901234567890n;
console.log(typeof(BigInt));
console.log(BigInt);

//String
let hasil = 'Arkatama' + n;
console.log(typeof(hasil));
console.log(hasil);
const nama1 = "Arkatama";
console.log(nama1);

//BooLean
let isLoggedIn = true;
console.log(typeof(isLoggedIn));
let isAdmin = false;

let isGreater = 10 > 5;
console.log(isGreater);
let isLess = 10 < 5;
console.log(isLess);

//Null
let girlfriend = null;
console.log(girlfriend);

//Undefined
let name;
console.log(name);

//Symbol
let employee = Symbol('Joko');
console.log(employee);
console.log(employee.description);

//Object
let employeee = {
    name: "John",
    age: 30,
    job: "Web Developer",
    isMarried: false,
    hobies: ["Sports", "Cooking"],
};

console.log(`His name is ${employeee.name} and he is ${employeee.age} years old.`);