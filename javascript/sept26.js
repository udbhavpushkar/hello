// console.log("Hey from new js file")

// alert("Hello Shubham")

// confirm("Are you sure you want to learn js?")

//First Class Function => if functions are treated as a value, then is is known as first class function

//Anonymous function => A function without name is called anonymous function

//Function Statement
function doSomething(a) {
  //can call before defining
  console.log(a + " is doing something")
}

// Function expression
var x = function (a) {
  //cannot call before defining
  console.log(a + " is doing something from first class function ")
}

// doSomething("Aditya")

// x("Anwar")

// function sayHello() {
//   console.log("hi everyone")
// }

// function jagesvar() {
//   console.log("hi jageshwar")
// }

// function akhilesh(z) {
//   z()
// }

// akhilesh(sayHello)
// akhilesh(jagesvar)

// Higher Order Functions =>
// Functions can be passed as an argument of a function
// Functions can be returned from a function

// function hoc() {
//   function xyz() {
//     console.log("I am inner function")
//   }

//   return xyz
// }

// var p = hoc() //it will return xyz fn

// p()

// Primitives => 7 Primitives data type
//string, number, boolean, undefined, null, symbol
// let str = "hdjaskhdkjashd"
// let abc = 9879898.09876
// let isMarried = false

// let k
// let l = null

// Object => Key : value pair

// let user1 = { name: "Hemant", age: 27, gender: "male" }

// console.log(user1.name + " is " + user1.age + " year old " + user1.gender)

// user1.name = "Shudhanshu"

// console.log(user1.name)

// let user2 = {
//   name: "Jayeshre",
//   age: 29,
//   gender: "female",
//   eat: function () {
//     console.log("I am eating")
//   },
//   address: { city: "Delhi", pincode: "223344" },
// }

// console.log(user2.address)

// let user3 = user2

// user3.age = 34

// console.log(user2.age)

// user2.eat()

// console.log(user3.name)

// Hoisting => The property through which variables/functions can be accessed before its declaration

// bidyut()

// function bidyut() {
//   console.log("bidyut ubuntu")
// }

// console.log(rohit)

// var rohit = "Hey rohit"

// console.log(rohit)

// console.log(dipak)

// let dipak = "Hey depak"

// function welcome() {
//   console.log("Hello, Welcome ")
// }

// let age = 35

// if (age < 18) {
//   console.log("child")
// } else if (age >= 18 && age < 60) {
//   console.log("Adult")
// } else {
//   console.log("Old")
// }

// Falsey =>  false, 0, "", undefined, null
// Truethy => everything in js except falsy

// if (67) {
//   console.log("running")
// }

// let mac = "A"

// switch (mac) {
//   case "A":
//     console.log("Hey this is A")
//     break
//   case "B":
//     console.log("hey B")
//     break
//   default:
//     break
// }

// for (let i = 0; i < 5; i++) {
//   console.log(i)
// }

// let i = 0

// do {
//   console.log(i)
//   i++
// } while (i < 5)

// let person1 = { name: "adib", age: 23 }
// let person2 = { name: "adib", age: 23 }

// let p1 = "Adi"
// let p2 = "Adi"

// if (p1 === p2) {
//   console.log("Hey both are equal")
// }

// // Coercion => gets implicit converted into other data type
// console.log("7" + 8) // 78

// let p1 = "9"
// let q1 = 7

// console.log(Number(p1) + q1) //97 , 16

// let arr = [23, 78, 989, 4567, 976, 4.089, "udbhav"]

// let arr1 = ["Udbhav", "Adib", "Raza", 345, 32877382]

// for (let i = 0; i < arr1.length; i++) {
//   console.log(arr1[i])
// }

// let v1 = "Akhilesh"

// function f1() {
//   let v1 = "Rajeev"

//   function f2() {
//     console.log(v1)
//   }

//   f2()
// }

// f1()

// Closure => Function that have access to its parent scope/lexical envireomnet
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

// function c1() {
//   var q = 87

//   function c2() {
//     console.log(q)
//   }
//   return c2
// }

// var y = c1()

// y() // calling c2()
// console.log(y)

// Callback Functions => When a function is passed as an argument to another function

function sayHello() {
  console.log("hi everyone")
}

// function akhilesh(z) {
//   console.log("Hey 1. 2. 3...")
//   z()
// }

// // We are calling akhilesh, passing sayHello as an argument
// akhilesh(sayHello)

// // We are calling akhilesh, passing anonymous (fn without name) function as an argument
// akhilesh(function () {
//   console.log("hi jageshwar")
// })

// console.log("Hey first")

// // call sayHello function after 4000 milliseconds (4sec)

// setTimeout(sayHello, 4000)

// setTimeout(function () {
//   console.log("hi from anonymous function")
// }, 4000)

// console.log("hey last")

// let num = 60
// let timer = setInterval(function () {
//   num--
//   console.log(num)
// }, 1000)

// setTimeout(function () {
//   clearInterval(timer)
// }, 7000)

// setTimeout => Calls a function after certain time
// setInterval => Calls a function repeatedly after certain time interval
// clearInterval => To stop setInterval

// Task => explore and use .sort function in array

// new Date(year, month, date, hr, min, sec, milliseconds)

// Month 0-11 => 11 december, 1 feburary

// let currentDate = new Date() // currentDate
// let sohilDOB = new Date(1997, 3, 1, 11, 5, 45, 2)
// let customDate = new Date(994193849384) // will return date milliseconds passed after 1 Jan, 1970 00:00:00

// 1 Jan, 1970

// console.log("Current Date  : " + currentDate)
// console.log("Sohil DOB : " + sohilDOB)
// console.log("Random Date : " + customDate)

// let year = currentDate.getFullYear()
// let month = currentDate.getMonth() + 1
// let date = currentDate.getDate()

// console.log("Custom date format : " + date + "/" + month + "/" + year)

// 30/9/2022

// Task => print current time in 12hrs and 24hrs clock format , 7:23PM and 19:23

// let obj1 = {
//   intro: function (a) {
//     console.log("My name is " + this.name)
//     console.log("Printing from agrs : " + a)
//   },
//   name: "Kanchan",
//   age: 22,
//   marks: [23, 65, 98, 12],
// }

// //JSON => JavaScript Object Notation
// // {
// //   name: "Udbhav",
// //   age: 25,
// //   address: "UP",
// // }

// obj1.name = "Sunny"

// obj1.intro("jhfhjghj")

// let ages = [32, 65, 87, 12, 67, 6, 9, 7, 2, 5] // array of numbers
// let names = ["Jag", "Shivam", "Maiyank", "Mishra"] // array of strings
// let users = [
//   { name: "Udbhav", age: 24 },
//   { name: "Shivam", age: 22 },
//   { name: "Risabh", age: 22 },
// ] // array of objects

// let str = ""
// for (let i = 0; i < ages.length; i++) {
//   str += ages[i] + " "
// }

// console.log(ages)
// ages.push(34) //Add element in array at last
// ages.pop() //Remove element from last
// ages.shift() //Remove element from start
// ages.unshift(322) //Insert element at start

// let deb = ages.slice(1, 3) // .slice(start, end) it will return the new sliced array

// console.log(deb)

// ages.splice(3, 4) // .splice(start, deletionCount)

//Task =>  Find how to add elements using splice

//Remove elements using splice
// ages.splice(2, 4)            =>.splice(start, elementDeletionCount)

//Adding elements using splice ,note : while adding elements using splice always set 2nd argument as 0
// ages.splice(0, 0, 88, 77, 323232, 9090)

//Replace elements using splice
// ages.splice(0, 2, 88, 77, 323232, 9090)

// console.log(ages)

// function triple(a) {
//   return a * 3
// }

// triple(32)

//Arrow functions
// const arrowTriple = (a) => a * 3

// arrowTriple(434)

// const add = (a, b, c) => {
//   return a + b + c
// }

// add(12, 4, 67)

// const sayName = (name)=>{
//   return "Welcome " + name
// }

//In arrow function, if we have only one parameter, then we can remove rounded bracket
// if we are returning directly, then we can remove {} and also return keyword
// const sayName = name => "Welcome " + name

// let obj1 = {
//   intro: function () {
//     console.log("My name is " + this.age)
//   },
//   name: "Kanchan",
//   age: 22,
//   sayMyAge: () => {
//     console.log("My age is :" + this.age)
//   },
//   marks: [23, 65, 98, 12],
// }

// obj1.intro()
// obj1.sayMyAge()

//Arrow function dont have their own this keyword unlike regular function

// let user1 = {
//   name: "Sridevi",
//   age: 26,
//   address: "Mumbai",
// }

// let user2 = user1 //Copying user1 in user2 => Shallow copy
// let user2 = Object.assign({}, user1) //Deep copy

// Spread Operator
// let user2 = { ...user1, name: "Anwar", married: true } //Deep Copying using spread operator

// user2.name = "Anwar"

// console.log(user1)
// console.log(user2)

// let arr = [23, 45, 67, 91]
// let newArr = [5, 8, 9]

// // let arr1 = arr
// let arr1 = [...arr, ...newArr] // Deep copy of array using spread operator

// arr1[2] = 99

// console.log(arr)
// console.log(arr1)

// Array methods
// callback function(element, index)

// let ages = [21, 25, 67, 32]

// for (let i = 0; i < ages.length; i++) {
//   console.log("Age : " + ages[i] + ", index: " + i)
// }

//ForEach
// const printElement = (val, index) => {
//   console.log("Age : " + val, "index : " + index)
// }

// ages.forEach(printElement)

//forEach will execute the callback function for each of the the element of the array
// ages.forEach((ele, index) => {
//   console.log("Index :" + index + ", Age : " + ele)
// })

// let ages = [21, 25, 67, 32]
//Map
// let ages2 = []
// for (let i = 0; i < ages.length; i++) {
//   ages2.push(ages[i] + 2)
// }

//map will return a new array with elements that we return from a callback function
//map will return a new array

// let ages2 = ages.map((val, index) => {
//   return val + 2
// })

// console.log(ages2)

// let ages = [21, 25, 67, 32, 18, 23, 28, 33]

//Filter
// let ages2 = []

// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] > 25) {
//     ages2.push(ages[i])
//   }
// }

// console.log(ages2)

// let a = 24 > 4

// filter will return a new array with elements that we return as true in callback function
// filter will return a new array
// let ages2 = ages.filter((val) => {
//   return val > 25
// })

// console.log(ages2)

//Find areas if sides are given
// let sides = [4, 8, 2, 10, 6] //[16, 64, 4, 100, 36]

// let areas = sides.map((val) => val * val)

// console.log(areas)

//Find all even elements in array
// let nums = [9, 8, 7, 1, 2, 3, 4, 5, 6, 12, 45, 23, 32]

// let evenNums = nums.filter((val) => val % 2 === 0)

// console.log(evenNums)

let nums = [2, 5, 8, 7, 4]
// let sum = 0
// for (let i = 0; i < nums.length; i++) {
//   sum = sum + nums[i]
// }
// console.log(sum)

//Reduce
// reduce will traverse through all the elements of array and return one value depending on the callback function
// let sum = nums.reduce((temp, val) => {
//   return temp + val
// })

// console.log(sum)

// let max = nums.reduce((temp, val) => {
//   if (val > temp) {
//     temp = val
//   }
//   return temp
// }, 0)

// this is a special keyword which points to the object from which it is called
// we cannot overwrite it

let user = {
  name: "Udbhav",
  city: "Ayodhya",
  intro: function () {
    console.log(this.name + " is from " + this.city)
  },
  valueOf: function () {
    console.log("Hihiihih")
  },
}

// you can use dot operator to access value or [key]
// user.name = "Mainak"
user["name"] = "Mainak"

// Prototype
// Whenever an object is created, another special object is attached to it and that special object is Prototype
// Prototype contains some methods and properties.

//TDZ => Temporal Dead Zone => place or state of the varaible where it is unreachable

// console.log(a)

// let a = 89
// console.log(a)

// OOPs => Object Oriented Programmings
// Class => It is a blueprint or template to create object
// Object => It is an instance of a class

//Template of car => Class Car
// // class Car = ()=>{
//     name: ,
//     color: ,
//     power: ,
//     engine: ,
//     brake: applyBreak = {
//       .
//       .
//       .
//       .
//     },
//     start: startingCar()
// // }

// new keyword creates a new object
// let car1 = new Car("Tata", "red", 1100, 900)
// let car1 = new Car("Tata", "red", 1100, 900)
// let car1 = new Car("Tata", "red", 1100, 900)
// let car1 = new Car("Tata", "red", 1100, 900)
// let car1 = new Car("Tata", "red", 1100, 900)
// let car1 = new Car("Tata", "red", 1100, 900)

// Math.sqrt(3232)

// console.log()

// Math.max(23, 45)

//Template of car
// function createCar(name, color, engine) {
//   let obj = {
//     name: name,
//     color: color,
//     engine: engine,
//     start: function () {
//       console.log(this.name + " Car is starting...")
//     },
//     brake: function () {
//       console.log("Car stopped")
//     },
//     accelerate: function (speed) {
//       console.log("New speed is " + speed)
//     },
//   }

//   return obj
// }

// //Object creation
// let car1 = createCar("Tata", "Red", "900cc")
// let car2 = createCar("Mercedeez", "Grey", "1100cc")

// // function Car(name, color) {
// //   this.name = name
// //   this.color = color
// // }

// // let car3 = new Car("BMW", "redd")

// // After ES6, we can use class keyword in JS, we can create class and initialize object from it.

// // Template of car using class keyword

// class Car {
//   constructor(name, color, engine) {
//     this.name = name
//     this.color = color
//     this.engine = engine
//     console.log("Hey object created")
//   }

//   start() {
//     console.log(this.name + " Car is starting...")
//   }
//   brake() {
//     console.log("Car stopped")
//   }
// }

// let car3 = new Car("Ferrari", "Yellow", "1500cc")
//Constructor is a special method that invokes automatically when we create an object

let a = 9
let b = a

a = 7

console.log(a)
console.log(b)
