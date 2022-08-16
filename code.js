function stringLength(string){
  const large = string.length;
  if(large > 0 && large <= 10) return large;

  throw new Error("Error: this string is not accepted");
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

class Calculator {
  add(a,b) {
    const c = a+b;
    return c;
  }

  subtrack(a,b){
    const c = a-b;
    return c;
  }

  divide(a,b){
    const c = a/b;
    return c;
  }

  multiply(a,b){
    const c = a*b;
    return c;
  }
}
const exit = new Calculator();

function capitalize(input) {
  if(typeof input !== 'string') throw new Error("Error: this input is not a string");
  let string = input.split('');
  string[0] = string[0].toUpperCase();
  string = string.join('');
  return string;
}

module.exports = {stringLength, reverseString, exit, capitalize}
