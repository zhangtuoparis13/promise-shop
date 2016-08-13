/**
 * Created by TBtuo on 12/08/16.
 */

/*
    // The way you have learned: create promise through the constructor.

var promise = new Promise(function (fulfill, reject) {
        fulfill('SECRET VALUE');
    });

// Introducing: Promise.resolve
// It does the exact same thing as above:

var promise = Promise.resolve('SECRET VALUE');


// Likewise...

var promise = new Promise(function (fulfill, reject) {
    reject(new Error('SECRET VALUE'));
});

var promise = Promise.reject(new Error('SECRET VALUE'));*/

/*
var promise = Promise.reject(new Error('REJECTED!'));
var onReject = (error)=>{
    "use strict";
    console.log(error.message)
};
promise.catch(onReject);
*/

// 'use strict';
//
// var message;
// var promise;
//
// function randomBytes(n) {
//     return (Math.random() * Math.pow(256, n) | 0).toString(16);
// }
//
// message =
//     'A fatal exception ' + randomBytes(1) + ' has occurred at ' +
//     randomBytes(2) + ':' + randomBytes(4) + '. Your system\nwill be ' +
//     'terminated in 3 seconds.';
//
// promise = Promise.reject(new Error(message));
//
// promise.catch(function (err) {
//     var i = 3;
//
//     process.stderr.write(err.message);
//
//     setTimeout(function boom() {
//         process.stderr.write('\rwill be terminated in ' + (--i) + ' seconds.');
//         if (!i) {
//             process.stderr.write('\n..... . . . boom . . . .....\n');
//         } else {
//             setTimeout(boom, 1000);
//         }
//     }, 1000);
// });

'use strict';

const cache = new Map();

// simulates a database operation with terrible coding style
function fetchData(key) {
    return new Promise((accept, reject) => {
        setTimeout(() => {
            switch(key) {
                case 'good stuff':
                    return accept('Here\'s the good stuff!');
                case 'bad stuff':
                    return reject(new Error('whoopsie!'));
            }
        });
    });
}

function getStuff(key) {
    // test cache
    if (cache.has(key)) {
        console.log('cache hit "' + key + '"');
        var value = cache.get(key);
        return value instanceof Error ?
            Promise.reject(value) :
            Promise.resolve(value);
    }
    // not in cache, go to db, then store the result
    console.log('cache miss "' + key + '"');
    return fetchData(key)
        .then(value => {
            cache.set(key, value);
            return value;
        })
        .catch(err => {
            cache.set(key, err);
            return Promise.reject(err);
        });
}

getStuff('good stuff')
    .then(val => console.log('val'))
    .then(() => getStuff('good stuff'))
    .then(val => console.log('val'));

getStuff('bad stuff').catch(err => {
    console.log(err.message);
});