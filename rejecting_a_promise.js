/**
 * Created by TBtuo on 12/08/16.
 */
/*

var promise = new Promise(function (fulfill, reject) {

    setTimeout(function () {
        reject(new Error('REJECTED!'));
    },300);
});

function onReject(error) {
    console.log(error.message);
}

promise.then(null,onReject);
*/

var promise = new Promise((fulfill,reject)=>{
    "use strict";
    setTimeout(()=>{
        reject(new Error('REJECTED!'))
    },300)
});

var onReject = error => console.log(error.message);

promise.then(null,onReject);
// promise.catch(onReject);
