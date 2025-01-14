'use strict'


//* Promises are composable

// const prm1 = Promise.resolve(Promise.resolve(Promise.resolve(18)))
// const prm1 = Promise.resolve(18)
// console.log('prm1:', prm1)

// const prm11 = prm1.then(x => {
//     console.log('x:', x)
//     return x / 2 // 9
// })
// console.log('prm11:', prm11)

// // const prm11 = prm1.then(x => {
// //     return Promise.resolve(x / 2)
// // })
// const prm111 = prm11.then(x => {
//     console.log('x:', x)
//     return `*${x}*`
// })

// console.log('prm111:', prm111)

// prm111.then(x => {
//     console.log('Got x:', x)
// })



///////////////////////////////////////////////////////////////////
Promise.resolve(18)
    .then(x => x / 2)
    .then(a => `#${a}#`)
    .then(x => {
        console.log('Got x:', x)
    })
    .catch(err => {
        console.log('err:', err)
    })

