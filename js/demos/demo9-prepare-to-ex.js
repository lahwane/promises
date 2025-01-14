'use strict'

// Write a function isHot that takes a number as an argument 
// and returns a promise.
// The Promise should resolve to a boolean value:
// temperature >= 34 and if the temperature is not between
// -100 and 100 reject with the error: 'Out of range'

isHot(34)
    .then(result => console.log('Is hot?', result))
    .catch(error => console.error(error))

isHot(12)
    .then(result => console.log('Is hot?', result))
    .catch(error => console.error(error))

isHot(340)
    .then(result => console.log(result))
    .catch(error => console.error('Bad input:', error))


function isHot(t) {
    if (t < -100 || t > 100) return Promise.reject('Out of range')
    return Promise.resolve(t >= 34)

}

