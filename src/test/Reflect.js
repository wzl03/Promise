// var myObject = {
//     foo: 1,
//     bar: 2,
//     get baz() {
//       return this.foo + this.bar;
//     },
//   }
  
//   console.log(Reflect.get(myObject, 'foo')) // 1
//   console.log(Reflect.get(myObject, 'bar')) // 2
//   console.log(Reflect.get(myObject, 'baz')) // 3

var myObject = {
    foo: 1,
    set bar(value) {
        return this.foo = value;
    },
}
  
console.log(myObject.foo) // 1
Reflect.set(myObject, 'foo', 2);
console.log(myObject.foo) // 2
Reflect.set(myObject, 'bar', 3)
console.log(myObject.foo) // 3