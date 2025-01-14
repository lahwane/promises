'use strict'


// const prm = Promise.reject('Nope!')

//* How to get a rejected promise?

axios.get('https://yesno.wtf/api')
    .then(res => {
        console.log('res.data:', res.data)
    })
    .catch(err => {
        console.log('err:', err)
    })






