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
//string, number, boolean, undefined, null
// let str = "hdjaskhdkjashd"
// let abc = 9879898.09876
// let isMarried = false

// let k
// let l = null

// Object => Key : value pair

let user1 = { name: "Hemant", age: 27, gender: "male" }

// console.log(user1.name + " is " + user1.age + " year old " + user1.gender)

user1.name = "Shudhanshu"

// console.log(user1.name)

let user2 = {
  name: "Jayeshre",
  age: 29,
  gender: "female",
  eat: function () {
    console.log("I am eating")
  },
  address: { city: "Delhi", pincode: "223344" },
}

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

let ages = [32, 65, 87, 12, 67, 6, 9, 7, 2, 5] // array of numbers
let names = ["Jag", "Shivam", "Maiyank", "Mishra"] // array of strings
let users = [
  { name: "Udbhav", age: 24 },
  { name: "Shivam", age: 22 },
  { name: "Risabh", age: 22 },
] // array of objects

// let str = ""
// for (let i = 0; i < ages.length; i++) {
//   str += ages[i] + " "
// }

console.log(ages)

// ages.push(34) //Add element in array at last
// ages.pop() //Remove element from last
// ages.shift() //Remove element from first
// ages.unshift(322) //Insert element at start

// let deb = ages.slice(1, 3) // .slice(start, end) it will return the new sliced array

// console.log(deb)

ages.splice(3, 4) // .splice(start, deletionCount)

//Task =>  Find how to add elements using splice

console.log(ages)
