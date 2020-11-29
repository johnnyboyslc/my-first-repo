function multiply (){
  let rlSync = require('readline-sync');
  let firstNum = Number(rlSync.question('Enter the first number: '));
  let secondNum = Number(rlSync.question('Enter the second number: '));
  
  return console.log(firstNum + ' \* ' + secondNum + ' \= ' + (firstNum*secondNum))
  }
  
  multiply();

  
  