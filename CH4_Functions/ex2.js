function askName (prompt){
let rlSync = require('readline-sync');
let name = rlSync.question(prompt);
return name;
}

let fName = askName('What is your first name? ');
let lName = askName('What is your last name? ');


console.log(`Hello, ${fName} ${lName}!`);
