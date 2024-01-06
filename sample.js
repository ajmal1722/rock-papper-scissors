// document.write("<h1>Learn Javascript</h1>");
// console.log("good morning");
// // alert("hello world");


// //variables & datatypes

// //string
// var person = "Ajmal";
// let person1 = "Muhammed";
// document.write(person1 + " ");
// document.write(person);
// document.write("<br>");
// document.write(typeof person);

// // Number
// var number = 10;
// var number2 = 10.5;

// // Boolean
// var js = true;
// var html = false;

// //undefined
// var test1;

// //null
// var test1 = null;




// // DOM manipulation
// const form = document.getElementById("myForm");

// form.addEventListener("submit", function (event) {
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;

//     if (!name || !email) {
//         alert("Name and email are required fields.");
//         event.preventDefault(); // Prevent form submission
//     }
//     // You can add more validation here, e.g., for email format.
// });
// // Validate email format
// const emailInput = document.getElementById("email");
// const emailValue = emailInput.value;
// const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// if (!emailPattern.test(emailValue)) {
    
//     event.preventDefault();
// }
// const emailInput = document.getElementById("email");
// const emailError = document.getElementById("emailError");

// // Validation code
// if (!emailPattern.test(emailValue)) {
//     emailError.textContent = "Please enter a valid email address.";
//     emailError.style.display = "block";
//     event.preventDefault();
// } else {
//     emailError.style.display = "none";
// }


/*************** ***   NODE JS  ***   ************* */
/*********************        ******************** */


// y();
//  function y () {
//     console.log('I am y')
// }
//  function y () {
//     console.log(' am y')
// }
// function y () {
//     console.log('hello y');
// }

// console.log(2+4+4+'5'+3)
// console.log(('2'+'4'*4));

const express = require('express');
const ajmal = express();
const fs = require('fs')

const html = fs.readFileSync('index.html', 'utf-8')

const PORT = 8000;

ajmal.get('/', (req, res) => {
    res.send(html)
})
ajmal.listen(PORT)


// const http = require('http');
// const PORT = 8000;

// const server = http.createServer((req, res) => {
//     res.end('hello node.js')
// });

// server.listen(8080);


const person = {
    name: 'Salman',
    age: 22,
    hobbies: ['playing', 'reading'],
    eateries: [ {
        drinks: ['water', 'juice', 'boost'],
        snacks: [{
            soft: 'samosa',
            hard: 'pathiri'
        },{
            western: ['pizza', 'burger']
        }]
    } ]
}

// console.log('name:', person.name);
// console.log('hobbies:', person.hobbies);
// console.log(person.eateries[0]);
// console.log('drinks :', person.eateries[0].drinks[1]);
// console.log('snacks which is soft:', person.eateries[0].snacks[0].soft);
// console.log('favourite western snacks:', person.eateries[0].snacks[1].western[1]);

//changing the values
// person.eateries[0].snacks[1].western[1] = 'Sandwich';
// console.log('edited western snacks:', person.eateries[0].snacks[1].western);
// person.eateries[0].drinks[2] = 'Horlicks';
// console.log('edited drinks:', person.eateries[0].drinks);

//for in loop
for (const key in person) {
    // console.log(key)
    console.log(person[key])
}


// const values = person.eateries.hobbies[2];

// console.log(values)

// let x = parseInt('134 ajmal4')
// console.log(x)

// let b = 4
// b = !b;
// console.log(b)