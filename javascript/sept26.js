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

function hoc() {
  function xyz() {
    console.log("I am inner function")
  }

  return xyz
}

var p = hoc() //it will return xyz fn

// p()

// Primitives => 7 Primitives data type
//string, number, boolean, undefined, null
let str = "hdjaskhdkjashd"
let abc = 9879898.09876
let isMarried = false

let k
let l = null

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

console.log(user2.address)

let user3 = user2

user3.age = 34

console.log(user2.age)

user2.eat()

// console.log(user3.name)
