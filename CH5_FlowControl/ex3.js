function evenOrOdd (num) {
if (typeof num !== 'number') {
  console.log("Error...not an integer")
} else if(num%2 === 0) {
console.log('even');
} else {
  console.log('odd');
}

}

evenOrOdd(4);
evenOrOdd(3);
evenOrOdd(177);
evenOrOdd("three");
