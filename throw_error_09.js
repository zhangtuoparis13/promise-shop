/**
 * Created by tuo on 16/8/13.
 */

// function parsePromised(json) {
//     return new Promise((resolve,reject) =>{
//         "use strict";
//
//         try {
//             var result = JSON.parse(json);
//             resolve(result)
//         } catch (err) {
//             reject(err)
//         }
//     })
// }
//
// parsePromised(process.argv[2])
//         .then(val => console.log(val))
//         .catch(err => console.log(err));

'use strict';

function parsePromised(json) {
    return new Promise((accept, reject) => {
        try {
            var result = JSON.parse(json);
            accept(result);
        } catch (err) {
            reject(err);
        }
    });
}

parsePromised(process.argv[2])
    .then(null,console.log);
