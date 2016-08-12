
/*var promise = new Promise(function (fullfill, reject) {
    setTimeout(function () {
        fullfill('FULLFILLED!')
    },300);
});

promise.then(function (value) {
    console.log(value);
}).catch(function (error) {
    console.log(error);
});*/


// Create a promise

// var promise = new Promise(function (fulfill, reject) {
//   // After the timeout reaches 300ms, fulfill the promise with value
//   // 'FULFILLED!'.
//
//   setTimeout(function () {
//     fulfill('FULFILLED!');
//   }, 300);
// });
//
// // Add a handler to the promise’s fulfillment. `console.log` will be called
// // with the value passed to `fulfill`, which is `'FULFILLED!'`.
// // Note that this statement will ALWAYS be executed before `fulfill` is
// // called (we'll talk about this in depth in the lessons to come).
//
// promise.then(console.log);

var promise = new Promise((fulfill, reject)=>{
  "use strict";
  setTimeout(()=>{
    fulfill('FULFILLED!')
  },300)
});

promise.then(val=>console.log(val));
