//THE FOLLOWING CODE LOGS 'bar' TO THE CONSOLE BECAUSE THE RE-ASSIGNMENT OF FOO TO 'qux' WAS BLOCK-SCOPED AND CANNOT BE SEEN OUTSIDE.
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);