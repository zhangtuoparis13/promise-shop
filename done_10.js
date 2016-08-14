/**
 * Created by tuo on 16/8/13.
 */

function alwaysThrows() {
    throw new Error('OH NOES!')
}

function iterate(i) {
    console.log(i);
    return i+1;
}

Promise.resolve()
    .then(() => iterate(1))
    .then(i => iterate(i))
    .then(i => iterate(i))
    .then(i => iterate(i))
    .then(i => iterate(i))
    .then(i => alwaysThrows())
    .then(i => iterate(i))
    .then(i => iterate(i))
    .then(i => iterate(i))
    .then(i => iterate(i))
    .then(i => iterate(i))
    .catch(err => console.log(err));