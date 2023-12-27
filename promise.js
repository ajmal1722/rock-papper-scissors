const promise = require('promise');


// promise, then and catch
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
.catch(err => console.log(err));


// promise all
function getName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Muhammed Ajmal')
        }, 3000);
    });
}
function getMobile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('8468473210')
        }, 3000);
    });
}

promise.all([getName(), getMobile()]).then((res) =>{
    console.log(res);
})