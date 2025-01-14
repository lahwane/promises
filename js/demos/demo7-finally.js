'use strict'

//* Using finally:

// const prm1 = Promise.resolve(18)
// console.log('prm1:', prm1)

const prm = askUser()
prm
    .then((isApproved) => {
        console.log('User approval? ', isApproved)
    })
    .catch((err) => {
        console.log('Problem:', err)
    })
    .finally(() => {
        console.log('Finally!')
    })



// This function rejects if user click cancel in the SWAL modal
function askUser(title = 'Sure?') {

    const prmUserDecision = Swal.fire({
        title,
        showDenyButton: true,
    })

    const prm = prmUserDecision.then(({ value }) => {
        if (value) return 'Ok!'
        return Promise.reject('Problem')
    })
    return prm
}



