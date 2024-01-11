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

// const { rejects } = require('assert');
// // const express = require('express');
// const ajmal = express();
// const fs = require('fs');
// const { resolve } = require('path');

// const html = fs.readFileSync('index.html', 'utf-8')

// const PORT = 8000;

// ajmal.get('/', (req, res) => {
//     res.send(html)
// })
// ajmal.listen(PORT)


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

const array = [2, 4, 5, 1, 6, 9, 8]

// forEach
array.forEach(x => x * 10)

// map
const map = array.map(x => x * 10)
const map2 = array.map((x, y) => x * y)
// here, x will represent the value of the array and y will represent the index
// for example 2 * 0, 4 * 1, 5 * 2, 1 * 3, 2 * 4 so on......
console.log(map);
console.log(map2);

// filter
const filter = array.filter(x => x > 4)
const filter2 = array.filter((x, y) => x > 4 && y > 4)
// here, x will represent the value of the array and y will represent the index
console.log(filter)
console.log('filter2:',filter2)

// reduce
const reduce = array.reduce((acc, val) => acc + val, 0)
console.log(reduce)


// constructor function
function User(name, age, job) {
    this.name = name,
    this.age = age,
    this.job = job
}

const user1 = new User('Jon Doe', 25, 'Developer');
const user2 = new User('Katy Holmes', 22, 'Developer')
user2.job = 'Designer';
console.log(user1)
console.log(user2)


console.log('**********************');
// call apply bind
const alien1 = {
    name: 'Jack sparrow',
    age: 35
}
const alien2 = {
    name: 'Emily blunt',
    age: 30
}

function alienName (a, b, c) {
    console.log(this.name)
    console.log(this.age)
    console.log(a, b, c)
}

alienName.call(alien1, 3, 4, 5)
alienName.apply(alien2, [3, 6, 7])
const alienDatas = alienName.bind(alien1);
alienDatas(1, 6, 8)


// promises 
const a = 5;
const promise = new Promise((resolve, reject) => {
    if (a === 1) {
        resolve(a)
    } else {
        reject('value is not 1')
    }
})
promise.then(result => console.log(result))
    .catch(error => console.log(error))


// Destructuring
const arr = [4, 5, 2, 6, 1, 7]
let [x,y,,...z] = arr;
console.log('Destructured values: ',x, y, z)


// closure
function closure(){
    const val = 10;
    return function y (){
        console.log('closure:', val)
    }
}
let fun = closure()
fun()

// generator functions
function* myGenerator() {
    yield 1
    yield 2
    yield 3
}
const generator = myGenerator()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())


// slice
const slicedArray = array.slice(2, 4);
console.log('array:',array)
console.log('sliced array:', slicedArray)

// splice
// const splicedArray1 = 


// Recursion
function fac(n){
    if(n===1){
        return 1
    }else{
        return n*fac(n-1)
    }
}

console.log(fac(5));

function str(s){
    if(s===''){
        return ''
    }else{
        return str(s.substr(1))+s.charAt(0)
    }
}

console.log(str('fahiz'));