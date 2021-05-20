// 工厂模式
// function createPerson(name,age,job){
//     var o = new Object();
//     o.name = name; 
//     o.age = age; 
//     o.sayName = function(){
//         alert(this.name);
//     };
//     return o;
// }
// var person = createPerson('abc',29);
// console.log(person)

// 构造函数模式
// function Person(name,age,job){
//     this.name = name; 
//     this.age = age; 
//     this.sayName = function(){
//         alert(this.name); }; 
// }
// var person = new Person('abc',29);
// console.log(person)

// 原型模式
// function Person(){}
// Person.prototype.name = 'abc';
// Person.prototype.age = 29;
// Person.prototype.sayName = function(){
//     console.log(this.name);
// };
// var person = new Person();
// person.sayName()

// 原型链继承
// function SuperType() {
//     this.property = true;
// }
// SuperType.prototype.getSuperValue = function() {
//     return this.property;
// }
// function SubType() {
//     this.subproperty = false;
// }
// // 创建SuperType的实例
// SubType.prototype = new SuperType(); 
// SubType.prototype.getSubValue = function() {
//     return this.subproperty;
// }
// var instance = new SubType();
// console.log(instance.getSuperValue()); // true

// 盗用构造函数
// function SuperType(){
//     this.color=["red","green","blue"];
// }
// function SubType(){
//     //继承自SuperType
//     SuperType.call(this);
// }
// var instance1 = new SubType();
// instance1.color.push("black");
// console.log(instance1.color);//"red,green,blue,black"

// var instance2 = new SubType();
// console.log(instance2.color);//"red,green,blue"

// 组合继承
// function SuperType(name){
//     this.name = name;
//     this.colors = ["red", "blue", "green"];
//   }
//   SuperType.prototype.sayName = function(){
//     console.log(this.name);
//   };
//   function SubType(name, age){
//     SuperType.call(this, name);
//     this.age = age;
//   }
//   SubType.prototype = new SuperType(); 
//   SubType.prototype.constructor = SubType; 
//   SubType.prototype.sayAge = function(){
//       console.log(this.age);
//   };
//   var instance1 = new SubType("abc", 29);
//   instance1.colors.push("black");
//   console.log(instance1.colors); //"red,blue,green,black"
//   instance1.sayName(); //"abc";
//   instance1.sayAge(); //29
  
//   var instance2 = new SubType("def", 27);
//   console.log(instance2.colors); //"red,blue,green"
//   instance2.sayName(); //"def";
//   instance2.sayAge(); //27
  
// 原型式继承
function object(obj){
    function F(){}
    F.prototype = obj;
    return new F();
  }
//   var person = {
//     name: "abc",
//     friends: ["d", "e", "f"]
//   };
  
//   var anotherPerson = object(person);
//   anotherPerson.name = "g";
//   anotherPerson.friends.push("h");
  
//   var yetAnotherPerson = object(person);
//   yetAnotherPerson.name = "i";
//   yetAnotherPerson.friends.push("j");
  
//   console.log(person.friends);   //[ 'd', 'e', 'f', 'h', 'j' ]

// 寄生式继承
// function createAnother(original){
//     var clone = object(original); // 调用 object() 函数创建一个新对象
//     clone.sayHi = function(){  // 增强对象
//         console.log("hi");
//     };
//     return clone; // 返回这个对象
// }
// var person = {
//     name: "abc",
//     friends: ["d", "e", "f"]
// };
// var anotherPerson = createAnother(person);
// anotherPerson.sayHi(); //"hi"

// 寄生组合式继承
// function inheritPrototype(subType, superType){
//     var prototype = Object.create(superType.prototype); // 创建父类原型的一个副本
//     prototype.constructor = subType;                    // 增强对象，弥补因重写原型而失去的默认的constructor 属性
//     subType.prototype = prototype;                      // 指定对象，将新创建的对象赋值给子类的原型
// } 
// // 父类初始化实例属性和原型属性
// function SuperType(name){
//     this.name = name;
//     this.colors = ["red", "blue", "green"];
// }
// SuperType.prototype.sayName = function(){
//     console.log(this.name);
// }; 
// function SubType(name, age){
//     SuperType.call(this, name);
//     this.age = age;
// } 
// inheritPrototype(SubType, SuperType);
// SubType.prototype.sayAge = function(){
//     console.log(this.age);
// }
// var instance1 = new SubType("abc", 23);
// var instance2 = new SubType("def", 23);
// instance1.colors.push("2"); 
// instance2.colors.push("3"); 
// console.log(instance1.colors) // ["red", "blue", "green", "2"]
// console.log(instance2.colors) // ["red", "blue", "green", "3"]
  
  
  
    