//THE FOLLOWING CODE RESULTS IN A TYPEERROR BECAUSE IT TRIES TO REASSIGN A CONST VARIABLE 'NAME'. JS DOES NOT ALLOW REASSIGNMENT OF CONSTs


const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

//* 
john@MacBookPros-MacBook-Pro Ch2_Variables % node CH2_Ex4_result.js
Good Morning, Victor
Good Afternoon, Victor
Good Evening, Victor
/Users/john/git_basics/Ch2_Variables/CH2_Ex4_result.js:6
NAME = 'Joe';
     ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (/Users/john/git_basics/Ch2_Variables/CH2_Ex4_result.js:6:6)
*//