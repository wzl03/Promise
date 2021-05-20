// function log(x, y = 'World') {
//     console.log(x, y);
//   }
// log('Hello') // Hello World
// log('Hello', 'China') // Hello China
// log('Hello', '') // Hello

// function foo({x, y = 5}) {
//     console.log(x, y);
// }

// foo({}) // undefined 5
// foo({x: 1}) // 1 5
// foo({x: 1, y: 2}) // 1 2
// foo() // TypeError: Cannot read property 'x' of undefined

// function add(...values) {
// let sum = 0;
// for (var val of values) {
//     sum += val;
// }
// return sum;
// }
// console.log(add(2, 5, 3) )// 10

// function foo() {}
// console.log(foo.name) // "foo"

// function f(x) {
// if (x > 0) {
//     return m(x)
// }
// return n(x);
// }

function factorial(n, total) {
    if (n === 1) return total;
    return factorial(n - 1, n * total);
  }
  
console.log(factorial(5, 1)) // 120