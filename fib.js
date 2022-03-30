//Fibonacci Series Recursive Solution

function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

let value = fib(6);
console.log(value);
