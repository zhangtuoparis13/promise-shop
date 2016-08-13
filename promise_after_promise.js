/**
 * Created by TBtuo on 12/08/16.
 */

// this task will allow you to demonstrate an understanding how to chain promises
// together using then.

// var firstPromise = first();
//
// var secondPromise = firstPromise.then(function (val) {
//     return second(val);
// });
//
// secondPromise.then(console.log);

'use strict';

// same as callback hell!
// first().then(firstVal => {
//     second(firstVal).then(secondVal => {
//         console.log(secondVal);
//     });
// });

// // neatly arranged code, but still async!
first()
    .then(val => second(val))
    .then(val => console.log(val))
    .catch(err => console.error(err));
