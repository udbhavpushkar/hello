//Task => defer and async in script tag

//BOM => Browser object model
//Use to perform browser level opertaions, as mentioned below:
//window.close() => close the current tab
//window.location.reload() // reload current page
//location.href => returns url
// location.host
// location.protocol
// location.assign("https://www.google.com") // opens the url

//history.back() // press back button on browser
// history.forward() // press back button on browser

//DOM => Document Object Model

// Dom selector => ways to select html elements
document.getElementById("testing") //get single element by id
document.getElementsByClassName("classTest") // list of html elements by className
document.getElementsByTagName("div") // list of html elements by tagName

//Query selector will always return one html element that occurs first
document.querySelector("#testing") // select html element with id testing
document.querySelector(".classTest") // select html element with class classTest
document.querySelector("div") // select html element with tagName div

//Query Selector all will always return list
document.querySelectorAll("#testing")

//Manipulation of html elements

//innerHTML vs innerText
// document.getElementById("testing").innerText = "<h1>Udbhav</h1>" //Output => <h1>Udbhav</h1>
// document.getElementById("testing").innerHTML = "<h1>Udbhav</h1>" // Output => Udbhav in heading

//change css properties
//Note => use camelCase for css properties eg : backgroundColor
document.getElementById("testing").style.color = "red"
document.getElementById("testing").style.backgroundColor = "yellow"
