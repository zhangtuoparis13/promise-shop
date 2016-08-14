/**
 * Created by tuo on 16/8/14.
 */

// const qttp = require('q-io/http');
//
// qttp.read("http://localhost:7000")
//     .then(userId => qttp.read("http://localhost:7001" + userId))
//     .then(json => JSON.parse(json))
//     .then(val => console.log(val))
//     .catch(err => console.log(err));


'use strict';

// var qttp = require('q-io/http');
//
// qttp.read("http://localhost:7000")
//     .then(userId => qttp.read("http://localhost:7001/" + userId))
//     .then(json => JSON.parse(json))
//     .then(obj => console.log(obj))
//     .catch(err => console.log(err));

var qhttp = require('q-io/http');

// qttp.read("http://localhost:7000")
//     .then(function (userId) {
//         return qttp.read("http://localhost:7001" + userId)
//     })
//     .then(function (json) {
//         return JSON.parse(json)
//     })
//     .then(function (val) {
//         console.log(val)
//     })
//     .catch(function (err) {
//         console.log(err)
//     });

qhttp.read("http://localhost:7000/")
    .then(function (id) {
        return qhttp.read("http://localhost:7001/" + id);
    })
    .then(function (json) {
        console.log(JSON.parse(json));
    })
    .then(null, console.error)
    .done();
