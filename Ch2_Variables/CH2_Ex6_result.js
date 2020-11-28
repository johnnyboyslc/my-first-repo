//No error will occur because of the block scope separate the two const variables. It will log 'bar' to console.

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
