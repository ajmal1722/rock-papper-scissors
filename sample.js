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





