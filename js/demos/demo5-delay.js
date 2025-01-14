'use strict'

// TODO: Code a delay(t) function that gives a Promise API to setTimeout
delay(2500)
    .then((x) => {
        console.log('After Delay:', x)
    })


// console.log('End of invocation');



function delay(time) {

    // return Promise.resolve(555)

    // return setTimeout(() => {
    //     return Promise.resolve(555)
    // }, time);


    var prm = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(555)
        }, time)
    })
    // console.log('prm:', prm)
    return prm
}
