/*
The following funciton 'foo' doesn't change the global 'bar' variable because the 'bar' variable inside 
the function is scoped to the function.
*/

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);