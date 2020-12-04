/* let rlSync = require('readline-sync');

let age = Number(rlSync.question('What is your age? '));

console.log(`You are ${age} years old.`)

console.log(`In 10 years, you will be ${age +10} years old.`);
console.log(`In 20 years, you will be ${age +20} years old.`);
console.log(`In 30 years, you will be ${age +30} years old.`);
console.log(`In 40 years, you will be ${age +40} years old.`); */

//Refactor above code to use a for loop

let rlSync = require('readline-sync');

let age = Number(rlSync.question('What is your age? '));

console.log(`You are ${age} years old.`)

for (let plus10 =10; plus10 <=40; plus10+=10) {
console.log(`In ${plus10} years, you will be ${age + plus10} years old.`);

};