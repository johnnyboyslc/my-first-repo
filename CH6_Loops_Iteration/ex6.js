//refactor to use recursion


let total = 1;

function factorial (factorNum) {
  // let total = 1;
  //   for (i=n; i>0; i-=1){
  //     total *= i;
  //   }
  //   return total;
  // }
  total *=factorNum;
  factorNum -=1;
  if (factorNum > 0) {
    factorial(factorNum)
  }
  return total;
  }
  


  
  
  console.log(factorial(1));     // => 1
  console.log(factorial(2));     // => 2
  console.log(factorial(3));     // => 6
  console.log(factorial(4));     // => 24
  console.log(factorial(5));     // => 120
  console.log(factorial(6));     // => 720
  console.log(factorial(7));     // => 5040
  console.log(factorial(8));     // => 40320