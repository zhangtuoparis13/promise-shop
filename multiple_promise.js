/**
 * Created by tuo on 16/8/14.
 */

'use strict';

/*
function all() {
    var promises = [].slice.call(arguments);
    var resolved = false;
    var results = [];
    var counter = promises.length;

    return new Promise((accept, reject) => {
        // accept handler, count results, accept when done
        const onAccept = (i) => (val) => {
            if (resolved) return;
            results[i] = val;
            counter--;
            if (counter === 0) {
                resolved = true;
                accept(results);
            }
        }
        // reject handler, terminate if any promise rejects
        const onReject = (err) => {
            resolved = true;
            reject(err);
        }
        // handle all promises
        for(let i = 0; i < promises.length; i++) {
            promises[i].then(onAccept(i), onReject);
        }
    });
}

all(getPromise1(), getPromise2())
    .then(result => console.log(result))
    .catch(err => console.log(err));*/

'use strict';

/* global getPromise1, getPromise2 */

function all(a, b) {
    return new Promise(function (fulfill, reject) {
        var counter = 0;
        var out = [];

        a.then(function (val) {
            out[0] = val;
            counter++;

            if (counter >= 2) {
                fulfill(out);
            }
        });

        b.then(function (val) {
            out[1] = val;
            counter++;

            if (counter >= 2) {
                fulfill(out);
            }
        });
    });
}

all(getPromise1(), getPromise2())
    .then(console.log);