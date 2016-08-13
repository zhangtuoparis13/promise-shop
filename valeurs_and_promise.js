/**
 * Created by tuo on 16/8/13.
 */

// var attachTitle = name => {return 'DR. ' + name};

function attachTitle(name) {
    return 'DR. ' + name
}

var promise = Promise.resolve('MANHATTAN');

promise
    .then(attachTitle)
    .then(name => console.log(name))
    .catch(err => console.log(err.message));