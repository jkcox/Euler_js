//Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
//1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function fib(stack, n) {
  if(n == 0) {
    return 1;
  }
  if(n == 1) {
    return 2;
  }
  return stack[n - 1] + stack[n - 2];
}

var max   = 4000000;
var total = 0;
var stack = [];

for(var i = 0; i < max; i++) {
  stack[i] = fib(stack,i);
  if(stack[i] > max) {
    break;
  }
  if(stack[i] % 2 == 0) {
    total += stack[i]
  }
}

console.log(total);
