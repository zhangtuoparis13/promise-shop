/**
 * Created by TBtuo on 12/08/16.
 */

// var promise = new Promise(function (fulfill, reject) {
//     fulfill('I FIRED');
//     reject(new Error('I DID NOT FIRE'))
// });
//
// function onReject(error) {
//     console.log(error.message)
// }
//
// promise.then(console.log,onReject)

// const promise = new Promise((accept, reject) => {
//     accept('I FIRED');
//     reject(new Error('I DID NOT FIRE'));
// });
//
// function onAccept(msg) {
//     console.log(msg);
// }
//
// function onReject(err) {
//     console.log(err.message);
// }
//
// promise.then(onAccept, onReject);

const promise = new Promise((fulfill,reject) => {
    "use strict";
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

let onFulfill = msg => console.log(msg);
let onReject = err => console.log(err.message);

promise.then(onFulfill, onReject);