'use strict'

// Using Promise.all:

const prm1 = Promise.resolve(4)
const prm2 = askUser()
const prm3 = new Promise((resolve) => {
    setTimeout(resolve, 2000, 11)
})
// const prm1 = Promise.reject('PRM 3 IS BAD')

function askUser(title = 'Sure?') {
    const prmUserDecision = Swal.fire({
        title,
        showDenyButton: true,
    })
    return prmUserDecision
}


Promise.all([prm1, prm2, prm3])
    .then((results) => {
        console.log('Results, ', results)
    })
    .catch(err => {
        console.log('err:', err)
    })


