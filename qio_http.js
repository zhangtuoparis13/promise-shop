'use strict';

const qttp = require("q-io/http");

// qttp.read('http://localhost:1337')
//     .then(data => JSON.parse(data))
//     .then(obj =>console.log(obj))
//     .catch(err => console.log(err));

qttp.read("http://localhost:1337")
    .then(function (json) {
        console.log(JSON.parse(json))
    })
    .catch(err => console.log(err));