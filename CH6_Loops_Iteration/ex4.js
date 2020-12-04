//Does it produce an error? Why/Why not? What does it log to console?
//My response: No error is produced. All three blocks in the for loop are optional; however, you still have to..
//..ensure that the condition increments, which this does as part of the console.log method.
//  What is logged to the console is 1 through 5.

for (let i = 0; i < 5;) {
  console.log(i += 1);
}