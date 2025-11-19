// promises in js
// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Hie');
//         resolve(999);
//     }, 5000);
//     // reject(new Error('You have made some mistake!'));
// });

// here we use then after catch bcoz if we write it seperately like below comment then it shows still error for then bcoz then will be applied on rejected promise bcoz promise is rejected immediately as sync code. also you can handle this by providing error handler in then
// myPromise.catch(error => {console.log('error handled successfully: ', error)})
// .then(value => {console.log('my promise resolved with value ', value);});

// seperate shows error for then in console
// myPromise.catch(error => {console.log('error handled successfully: ', error)});
// myPromise.then(value => {console.log('my promise resolved with value ', value);});



// handling both then and catch inside then by providing error handler in then
// myPromise.then(value => {console.log('resolved with value ', value);}, 
// error => {console.log('error handled in then ', error);});



// now lets learn about promise chaining which is used when one promise is depend on another promise means we have to start the next only if the previous one is fullfilled then we can use multiple thens
// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('resolved promise 1');
//         resolve(400);
//     }, 5000);
// }).then((value) => {
//     let promise2 = new Promise((res, err) => {
//         setTimeout(() => {
//             console.log('resolved promise 2');
//             res(999);
//         }, 10000);
//     });
// }, (error) => {
//     console.log('error happened in promise 1 ', error);
// });

// It is okay for 2 to 3 promises but what if there are many promises which are dependant on each other like 50 promises then you write 50 times promises no wayyyyyyyyyyyyyyy thats why we have solution for this which is called async await 
// in below example we are demonstrating web api
// async function fetchWeatherData() {
//     let delhi = await new Promise((resolve, reject) => {
//             setTimeout(() => {
//             resolve('delhi resolved');
//         }, 3000);
//     });
//     let pune = await new Promise((resolve, reject) => {
//             setTimeout(() => {
//             resolve('pune resolved');
//         }, 3000);
//     });
    
//     return [delhi, pune];
// }

// async function printWeather() {
//     let weathers = await fetchWeatherData();
//     console.log(weathers);
// }
// printWeather();


// now lets play with fetch request
console.log('parth magar');
async function fetchUsers() {
    let users = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(users);
    let usersobj = await users.json();
    console.log(usersobj);
    
}
fetchUsers();

let ele = document.getElementById('pheading');
ele.textContent = 'Promises By Parth';

function printName() {
    console.log('i am here');
    
    console.log('My name is xyz');
    
}
printName();

// function test() {
//     console.log(a);  // undefined (hoisted)
//     var a = 10;
//     console.log(a);  // 10
// }
// test();
