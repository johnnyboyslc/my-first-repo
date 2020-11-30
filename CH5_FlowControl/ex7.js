function allCaps (myString) {
  if (myString.length >= 10) {
    return myString.toUpperCase();
  } else {
  return myString;
  }
}

console.log(allCaps('Hello World'));
console.log(allCaps('Hello'));
console.log(allCaps('Happiness Is the Truth!'));