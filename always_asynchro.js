/**
 * Created by TBtuo on 12/08/16.
 */

var promise = new Promise(function (fulfill, reject) {

    fulfill('PROMISE VALUE')
});

promise.then(console.log);
console.log("MAIN PROGRAM");