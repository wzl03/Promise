// var proxy = new Proxy({}, {
//     get: function(target, propKey) {
//       return 35;
//     }
//   });
  
// console.log(proxy.time) 
// console.log(proxy.name) 
// console.log(proxy.title) 
  
// const target = Object.defineProperties({}, {
//     foo: {
//       value: 123,
//       writable: false,
//       configurable: false
//     },
//   });
//   const handler = {
//     get(target, propKey) {
//       return 'abc';
//     }
//   };
//   const proxy = new Proxy(target, handler);
//   proxy.foo

// 'use strict';
// const handler = {
//   set: function(obj, prop, value, receiver) {
//     return false;
//   }
// };
// const proxy = new Proxy({}, handler);
// proxy.foo = 'bar';

// var twice = {
//     apply (target, ctx, args) {
//         return Reflect.apply(...arguments) * 2;
//     }
// };
// function sum (left, right) {
//     return left + right;
// };
// var proxy = new Proxy(sum, twice);
// console.log(proxy(1, 2)) 
// console.log(proxy.call(null, 5, 6))
// console.log(proxy.apply(null, [7, 8]))

// var handler = {
//     has (target, key) {
//         if (key[0] === '_') {
//             return false;
//         }
//         return key in target;
//     }
// };
// var target = { _prop: 'foo', prop: 'foo' };
// var proxy = new Proxy(target, handler);
// console.log('_prop' in proxy) // false

// const p = new Proxy(function () {}, {
//     construct: function(target, args) {
//       console.log('called: ' + args.join(', '));
//       return { value: args[0] * 10 };
//     }
//   });
  
//   (new p(1)).value
//   // "called: 1"

let target = {};
let handler = {};

let {proxy, revoke} = Proxy.revocable(target, handler);

proxy.foo = 123;
console.log(proxy.foo) // 123

revoke();
console.log(proxy.foo) // TypeError: Revoked