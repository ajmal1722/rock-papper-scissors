const promise = require('promise');

function add(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 === 0) {
            reject('First number is zero')
        } else {
            resolve(num1 + num2)
        }
    });
} 
function multiplication(num1, num2) {
    return new promise((resolve, reject) => {
        resolve(num1 * num2)
    }) 
}
function division(num1, num2) {
    return new promise((resolve, reject) => {
        resolve(num1 / num2)
    }) 
}

add(10, 20).then(sum => {
    console.log(sum)
    return multiplication(sum, sum)
}).then(product => {
    console.log(product);
    return division(product, 10)
}).then(result => console.log(result))
.catch(err => console.log(err))