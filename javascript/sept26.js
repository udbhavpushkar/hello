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

function sayHello() {
  console.log("hi everyone")
}

function jagesvar() {
  console.log("hi jageshwar")
}

function akhilesh(z) {
  z()
}

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

let v1 = "Akhilesh"

function f1() {
  let v1 = "Rajeev"

  function f2() {
    console.log(v1)
  }

  f2()
}

f1()

// Closure => Function that have access to its parent scope/lexical envireomnet
