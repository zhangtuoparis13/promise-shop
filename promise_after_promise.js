/**
 * Created by TBtuo on 12/08/16.
 */

// this task will allow you to demonstrate an understanding how to chain promises
// together using then.

var firstPromise = first();

var secondPromise = firstPromise.then(function (val) {
    return second(val);
});

secondPromise.then(console.log);

